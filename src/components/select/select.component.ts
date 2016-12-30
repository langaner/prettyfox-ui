import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SelectItem, SelectSettings } from './select.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-select',
    templateUrl: 'select.component.html',
    providers: [FOX_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: SelectSettings;
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() options: Array<SelectItem>;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected defaultSettings: SelectSettings;
    protected innerValue: any = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('select');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    onBlur(event: any) {
        this.onTouchedCallback();
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({originalEvent: event, value: this.innerValue});
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
            if(this.settings.required && value == undefined && this.options.length) {
                this.innerValue = this.options[0].value;
            } else {
                this.innerValue = value;
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