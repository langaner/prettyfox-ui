import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, forwardRef, ViewChild, Inject   
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';

import { EditorSettings, EditorLangs } from './editor.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.css'],
    providers: [FOX_EDITOR_CONTROL_VALUE_ACCESSOR]
})
export class EditorComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: EditorSettings;
    @Input() langs: EditorLangs;

    @ViewChild('area') area: ElementRef;
    @ViewChild('toolbar') toolbar: ElementRef;

    protected innerValue: any = '';
    protected defaultSettings: EditorSettings;
    protected defaultLangs: EditorLangs;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(
        private el: ElementRef, 
        @Inject(DOCUMENT) private document: any,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('editor');
        this.defaultLangs = overwriteService.getLangs('editor');
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
    
    command(cmd: string, arg: string): void {
        this.document.execCommand(cmd, false, arg);
    }

    execute(event: any, cmd: string, arg: string): void {
        switch (cmd) {
            case 'pre':
                cmd = 'formatblock';
                arg = 'pre';
                break;
            case 'blockquote':
                cmd = 'formatblock';
                arg = 'blockquote';
                break;
        }
        
        this.command(cmd, arg);
    }

    cmdState(cmd: string): any {
        return document.queryCommandState(cmd);
    }

    cmdValue(cmd: string): any {
        return document.queryCommandValue(cmd);
    }

    isElement(tag: string): boolean {
        let selection = window.getSelection().getRangeAt(0);
        
        if (selection) {
            if (selection.startContainer.nodeName === tag.toUpperCase() || 
                selection.endContainer.nodeName === tag.toUpperCase()
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    setFontSize(event: any): void {
        event.preventDefault();
        let value = event.target.value;
        let size = this.getKeyByValue(this.settings.fontSizes, value);

        if(value && size) {
            let spanString = '<span style="font-size:' + (size.size) + '">' + this.document.getSelection() + '<span/>';
            document.execCommand('insertHTML', false, spanString);
        }
    }

    getKeyByValue(object: Object, value: any): any {
        let result = Object(object).filter(function(obj: any) {
            return obj.value == value;
        });
        
        return result.length ? result[0] : false;
    }

    setValue(event: any): void {
        this.value = event.target.innerHTML;
    }
     
    get value(): any {
        return this.innerValue;
    };

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
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