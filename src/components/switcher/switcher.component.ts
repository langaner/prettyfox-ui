import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SwitcherSettings, SwitcherLangs } from './switcher.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-switcher',
    templateUrl: 'switcher.component.html',
    styleUrls: ['switcher.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitcherComponent),
        multi: true
    }]
})
export class SwitcherComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: SwitcherSettings;
    @Input() langs: SwitcherLangs;
    @Input() name: string = '';
    @Input() disabled: boolean;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected innerValue: any = true;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: SwitcherSettings;
    protected defaultLangs: SwitcherLangs;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('switcher');
        this.defaultLangs = overwriteService.getLangs('switcher');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.toggle();
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

    onBlur(event: any): void {
        this.onTouchedCallback();
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({value: this.innerValue});
    }

    toggle(): void {
        if(this.disabled) {
            return;
        }

        this.value = (this.innerValue == this.settings.trueValue) ? this.settings.falseValue : this.settings.trueValue;
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
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}