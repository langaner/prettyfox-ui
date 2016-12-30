import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { TextareaSettings } from './textarea.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_TEXTAREA_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-textarea',
    templateUrl: 'textarea.component.html',
    providers: [FOX_TEXTAREA_CONTROL_VALUE_ACCESSOR]
})
export class TextareaComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: TextareaSettings;
    @Input() name: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean;

    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() click: EventEmitter<any> = new EventEmitter();

    protected innerValue: any = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: TextareaSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('textarea');
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

    onBlur(event: any): void {
        this.onTouchedCallback();
    }

    onClick(event: any): void {
        this.click.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.change.emit({originalEvent: event, checked: event.target.checked});
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