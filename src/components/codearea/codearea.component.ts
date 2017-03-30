import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var CodeMirror: any;

// import * as CodeMirror from 'codemirror';

import { CodeareaSettings } from './codearea.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-codearea',
    templateUrl: 'codearea.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CodeareaComponent),
        multi: true
    }]
})
export class CodeareaComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: CodeareaSettings;
    @Input() name: string = '';
    @Input() disabled: boolean;

    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() blured: EventEmitter<any> = new EventEmitter();
    @Output() areaInstance: any = null;

    @ViewChild("codearea") codeareaEl: ElementRef; 

    protected innerValue: string = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: CodeareaSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('codearea');
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

    ngAfterViewInit(){
        this.codeMirrorInit();
    }

    codeMirrorInit() {
        this.areaInstance = CodeMirror.fromTextArea(this.codeareaEl.nativeElement, this.settings);
        this.areaInstance.setValue(this.value);
        
        this.areaInstance.on('change', () => {
            this.updateData(this.areaInstance.getValue());
        });
    
        this.areaInstance.on('focus', () => {
            this.focused.emit();
        });
    
        this.areaInstance.on('blur', () => {
            this.blured.emit();
        });
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
    
    updateData(data: string) {
        this.value = data;
        this.onTouchedCallback();
        this.changed.emit(data);
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
        if(value == undefined) {
            value = '';
        }

        if (value !== this.innerValue) {
            this.innerValue = value;
            
            if (this.areaInstance) {
                this.areaInstance.setValue(value);
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