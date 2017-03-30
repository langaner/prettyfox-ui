import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { InputSettings } from './input.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-input',
    templateUrl: 'input.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }]
})
export class InputComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: InputSettings;
    @Input() name: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected innerValue: any = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: InputSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('input');
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
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({value: this.innerValue});
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