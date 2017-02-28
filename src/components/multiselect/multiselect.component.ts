import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, forwardRef, HostListener 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { MultiselectSettings, MultiselectLangs, MultiselectAjax } from './multiselect.model';

import { OverwriteService } from '../../shared/services/overwrite.service';
import { HelperService } from '../../shared/services/helper.service';

export const FOX_MULTISELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiselectComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-multiselect',
    templateUrl: 'multiselect.component.html',
    styleUrls: ['multiselect.component.css'],
    providers: [FOX_MULTISELECT_CONTROL_VALUE_ACCESSOR]
})
export class MultiselectComponent implements OnInit, ControlValueAccessor {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() options: Array<any>;
    @Input() settings: MultiselectSettings;
    @Input() langs: MultiselectLangs;
    @Input() ajax: MultiselectAjax;
    @Input() ajaxSearch: boolean;

    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    protected innerValue: any;
    protected title: string;
    protected searchText: string = '';
    protected dropped: boolean;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: MultiselectSettings;
    protected defaultLangs: MultiselectLangs;
    protected defaultAjax: MultiselectAjax = {
        model: '',
        route: '',
        query: '',
        searchFields: ['id', 'title'],
    }

    constructor(
        private el: ElementRef, 
        private overwriteService: OverwriteService,
        private helperService: HelperService
    ) {
        this.defaultSettings = overwriteService.getSettings('multiselect');
        this.defaultLangs = overwriteService.getLangs('multiselect');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.ajax = (<any>Object).assign(this.defaultAjax, this.ajax);
        this.value = this.settings.single ? '' : [];
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
            this.dropped = false;
            this.outsideClick.emit({originalEvent: event});
        }
    }

    clearSearch(event: any): void {
        event.preventDefault();
        event.stopPropagation();
        
        this.searchText = '';
    }

    searchTyping(event: any): void {
        if(!this.ajaxSearch || this.defaultAjax.model == '' || this.defaultAjax.query == '' || this.defaultAjax.route == '') {
            return;
        }

        /**
         * @toDo Build ajax query to server if turn on ajax mode.
         */
    }

    buildName(values: any): void {
        if (values == undefined || values.length === 0) {
            this.title = this.langs.defaultTitle;
        } else if(this.settings.single) {
            this.title = this.options
                .filter((option: any) => values == option[this.settings.valueField])
                .map((option: any) => option[this.settings.titleField])
                .join('');
        } else if(this.settings.titleMaxItems >= values.length) {
            this.title = this.options
                .filter((option: any) => values && values.indexOf(option[this.settings.valueField]) > -1)
                .map((option: any) => option[this.settings.titleField])
                .join(', ');
        } else {
            this.title = this.langs.selectedItemsText + ': ' + values.length;
        }
    }

    isSelected(option: any): boolean {
        return this.innerValue && this.innerValue.indexOf(option[this.settings.valueField]) > -1;
    }

    onSelect(event: any, option: any): void {
        if (!this.innerValue) {
            this.innerValue = [];
        }

        if(this.settings.single == false) {
            let index = this.innerValue.indexOf(option[this.settings.valueField]);
            if(index > -1) {
                this.innerValue.splice(index, 1);
            }
        } else {
            this.innerValue = option[this.settings.valueField];
        }

        this.selected.emit({value: this.innerValue});
    }

    changeInnerValue(): void {
        this.buildName(this.innerValue);
        this.onChangeCallback(this.innerValue);

        if (this.settings.closeOnSelect) {
            this.dropped = false;
        }
    }

    toggle(): void {
        if(this.disabled) {
            return;
        }

        this.dropped = !this.dropped;

        this.showed.emit({originalEvent: event});
    }

    checkAll(event: any): void {
        event.preventDefault();

        this.innerValue = this.options.map(option => option[this.settings.valueField]);
        this.buildName(this.innerValue);

        this.onChangeCallback(this.innerValue);
    }

    uncheckAll(): void {
        event.preventDefault();
        
        this.innerValue = [];
        this.buildName(this.innerValue);

        this.onChangeCallback(this.innerValue);
    }

    onBlur(event: any) {
        this.onTouchedCallback();
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
        if (value != '' && value !== this.innerValue) {
            this.innerValue = (!this.settings.single && !this.helperService.isArray(value)) ? [] : value;
        }

        this.buildName(this.innerValue);
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}