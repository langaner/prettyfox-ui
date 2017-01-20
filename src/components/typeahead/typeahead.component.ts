import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef, HostListener, ElementRef 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { TypeaheadSettings, TypeaheadLangs, LazyloadEvent } from './typeahead.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_TYPEAHEAD_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeaheadComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-typeahead',
    templateUrl: 'typeahead.component.html',
    styleUrls: ['typeahead.component.css'],
    providers: [FOX_TYPEAHEAD_CONTROL_VALUE_ACCESSOR]
})
export class TypeaheadComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: TypeaheadSettings;
    @Input() langs: TypeaheadLangs;
    @Input() name: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean;
    protected _list: Array<any> = [];

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() lazyLoad: EventEmitter<any> = new EventEmitter();

    protected innerValue: any = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: TypeaheadSettings;
    protected defaultLangs: TypeaheadLangs;
    protected isHidden: boolean = true;
    protected searchText: string = '';
    protected isPreloaded: boolean;

    constructor(
        private el: ElementRef,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('typeahead');
        this.defaultLangs = overwriteService.getLangs('typeahead');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        }
        
        if(changes.langs) {
            let data = (<any>Object).assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = (<any>Object).assign({}, this.defaultLangs, data);
        }
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isHidden = true;
        }
    }

    onAutocompleteItem(item: any): void {
        this.value = item[this.settings.valueField];
        this.searchInput = item[this.settings.titleField];

        this.selected.emit({item: item, value: this.value});
        this.isHidden = true;
    }

    onBlur(event: any): void {
        this.onTouchedCallback();
    }

    onClick(event: any): void {
        if(this.searchText) {
            this.isHidden = false;
        } else {
            this.isHidden = true;
        }

        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({value: this.innerValue});
    }

    onTyping(): void {
        if(this.settings.lazyload) {
            this.fireLazyLoadEvent();
        }
        
        if (this.searchText != '') {
            this.isHidden = false;
        } else {
            this.isHidden = true;
        }
    }

    findItemByValue(value: any): any {
        let result: any;

        if(this.list && this.list.length) {
            for (var key in this.list) {
                if (this.list[key][this.settings.valueField] == value) {
                    return this.list[key];
                }
            }
        }

        return;
    }

   titleByObject(value: any): string {
        let item: any = this.findItemByValue(value);
        
        return (item) ? item[this.settings.titleField] : value; 
    }

    createLazyLoadData(): LazyloadEvent {
        return {
            value: this.searchText
        };
    }

    fireLazyLoadEvent(): void {
        this.startPreloader();

        if(this.settings.lazyload) {
            this.lazyLoad.emit(this.createLazyLoadData());
        }
    }

    startPreloader(): void {
        this.isPreloaded = true;
    }

    stopPreloader(): void {
        this.isPreloaded = false;
    }

    @Input()
    get list(): any {
        return this._list;
    };
    
    set list(value: any) {
        this._list = value;

        if(this.settings && this.value && this._list.length && this.settings.lazyload) {
            let item: any = this.findItemByValue(this.value);
            this.searchText = (item[this.settings.valueField] == this.searchText) ? this.titleByObject(this.value) : this.searchText;
        }
    }

    get searchInput(): any {
        if(this.searchText == '' && this.value) {
            this.searchText = this.titleByObject(this.value);
        }
        
        return this.searchText;
    };

    set searchInput(value: any) {
        this.searchText = value;
    }

    get value(): any {
        return this.innerValue;
    };

    set value(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }

    writeValue(value: any) {
        if (value && value !== this.innerValue) {
            this.innerValue = value;
            this.searchText = this.searchInput;

            if(this.settings.lazyload) {
                this.fireLazyLoadEvent();
            }
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}