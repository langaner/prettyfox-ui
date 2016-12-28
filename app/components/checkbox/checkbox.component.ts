import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { CheckboxSettings } from './checkbox.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_CHECKBOX_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
};

@Component({
    moduleId: module.id,
    selector: 'fox-checkbox',
    templateUrl: 'checkbox.component.html',
    styleUrls: ['checkbox.component.css'],
    providers: [FOX_CHECKBOX_CONTROL_VALUE_ACCESSOR]
})

export class CheckboxComponent implements OnInit, OnChanges, ControlValueAccessor {    
    @Input() settings: CheckboxSettings;
    @Input() disabled: boolean = false;
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() currentValue: any = '';
    
    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected checked: boolean = false;
    protected innerValue: any;
    protected defaultSettings: CheckboxSettings;

    private onTouchedCallback: () => void = () => { };
    private onChangeCallback: (_: any) => void = () => { };

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('checkbox');
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
        if(this.disabled) {
            event.preventDefault();
            return;
        }
        
        this.checked = !this.checked;

        this.clicked.emit({originalEvent: event, checked: event.target.checked});
    }

    onChange(event: any): void {
        this.updateValue();
        this.changed.emit({originalEvent: event, checked: event.target.checked});
    }

    updateValue(): void {
        if(false === this.settings.bool) {
            if(this.checked) {
                this.innerValue.push(this.currentValue);
            } else {
                let index = this.findIndex(this.currentValue)
                
                if(index >= 0) {
                    this.innerValue.splice(index, 1);
                }
            }
                
            this.onChangeCallback(this.innerValue);
        } else {
            this.onChangeCallback(this.checked);
        }
    }

    isChecked(): boolean {
        if(false === this.settings.bool) {
            return this.findIndex(this.currentValue) !== undefined;
        }
            
        return this.innerValue;
    }

    private findIndex(value: number): number {
        var index: number = -1;
        if(this.innerValue) {
            for (var i = 0; i < this.innerValue.length; i++) {
                if(this.innerValue[i] == value) {
                    return i;
                }
            }
        }
    }

    get value(): any {
        return this.innerValue;
    }

    set value(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }

    writeValue(value: any) {
        this.innerValue = value;
        this.checked = this.isChecked();
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    onBlur() {
        this.onTouchedCallback();
    }
}