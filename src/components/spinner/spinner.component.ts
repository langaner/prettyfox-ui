import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SpinnerSettings } from './spinner.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_SPINNER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpinnerComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.css'],
    providers: [FOX_SPINNER_CONTROL_VALUE_ACCESSOR]
})
export class SpinnerComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: SpinnerSettings;
    @Input() name: string = '';
    @Input() disabled: boolean;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected innerValue: number = 0;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: SpinnerSettings;
    
    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('spinner');
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
        this.changed.emit({value: this.innerValue});
    }

    get value(): any {
        if (this.innerValue == undefined) {
            this.innerValue = 0;
        }

        return this.innerValue;
    };

    set value(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }

    writeValue(value: any) {
        if (value !== undefined && value !== null) {
            this.innerValue = this.forceStep(value);
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    forceStep(value: number): any {
        switch (this.settings.forcestep) {
            case 'round':
                return Number((Math.round(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            case 'floor':
                return Number((Math.floor(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            case 'ceil':
                return Number((Math.ceil(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            default:
                return value;
        }
    }

    increment(event: void): void {
        let value = this.forceStep(this.innerValue + this.settings.step);
        if((value) <= this.settings.max) {
            this.value = value;
        }
        
        this.changed.emit({originalEvent: event, value: value});
    }

    decrement(event: any): void {
        let value = this.forceStep(this.innerValue - this.settings.step);
        if((value) >= this.settings.min) {
            this.value = value;
        }
        
        this.changed.emit({originalEvent: event, value: value});
    }
}