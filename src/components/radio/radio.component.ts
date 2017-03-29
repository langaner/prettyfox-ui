import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioSettings } from './radio.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_RADIO_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true
};

@Component({
    moduleId: module.id,
    selector: 'fox-radio',
    templateUrl: 'radio.component.html',
    styleUrls: ['radio.component.css'],
    providers: [FOX_RADIO_CONTROL_VALUE_ACCESSOR]
})

export class RadioComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: RadioSettings;
    @Input() disabled: boolean = false;
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() currentValue: any;
    
    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    public checked: boolean;

    protected innerValue: any;
    protected defaultSettings: RadioSettings;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('radio');
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

    onClick(event: any): void {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        
        this.clicked.emit({value: this.currentValue});
    }

    onChange(event: any): void {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        
        this.checked = true;
        this.onChangeCallback(this.currentValue);

        this.changed.emit({value: this.currentValue});
    }

    onBlur() {
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

    writeValue(value: any) : void {
        this.innerValue = value;
        let checked = (this.innerValue == this.currentValue);
        this.checked = checked;
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}