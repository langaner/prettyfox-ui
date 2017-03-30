import { Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef, ElementRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { PasswordSettings, PasswordLangs } from './password.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-password',
    templateUrl: 'password.component.html',
    styleUrls: ['password.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PasswordComponent),
        multi: true
    }]
})
export class PasswordComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() settings: PasswordSettings;
    @Input() langs: PasswordLangs;
    @Input() name: string = '';
    @Input() placeholder: string = '';
    @Input() disabled: boolean;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() generated: EventEmitter<any> = new EventEmitter();

    @ViewChild('passwordInput') passwordInput: ElementRef;

    public showPassword: boolean = false;
    public strongAvailable: number = 5;
    public strongValue: number = 0;

    protected innerValue: any = '';
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: PasswordSettings;
    protected defaultLangs: PasswordLangs;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('password');
        this.defaultLangs = overwriteService.getLangs('password');
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

    strong(password: any): void {
        let matches = 0;
        
        // min length
        if (password.length > this.settings.minLength) {
            matches++;
        }

        // contains char
        if (/[a-z]+/.test(password)) {
            matches++;
        }

        // contains upper char
        if (/[A-Z]+/.test(password)) {
            matches++;
        }

        // contains symbols
        if (/[$@&+#-/:-?{-~!"^_`\[\]]/g.test(password)) {
            matches++;
        }

        // contains number
        if (/\d+/g.test(password)) {
            matches++;
        }
        
        this.strongValue = matches;
    }

    strongLevelClass(level: number): string {
        if(level <= this.strongValue) {
            return 'fox-password__strong_' + level;
        }

        return;
    }

    generatePassword(): void {
        let length = this.settings.length;
        let string = "abcdefghijklmnopqrstuvwxyz";
        let numeric = '0123456789';
        let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = "";
        let character = "";

        while( password.length < length ) {
            let entity1 = Math.ceil(string.length * Math.random()*Math.random());
            let entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
            let entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
            let hold = string.charAt(entity1);

            hold = (entity1%2==0) ? hold.toUpperCase() : hold;
            character += hold;
            character += numeric.charAt(entity2);
            character += punctuation.charAt(entity3);
            password = character;
        }

        this.value = password;

        this.strong(password);

        this.generated.emit({password: password, strong: this.strongValue});
    }

    displayPassword() {
        this.showPassword = !this.showPassword;
    }

    onBlur(event: any): void {
        this.onTouchedCallback();
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({ovalue: this.innerValue});
        
        this.strong(this.innerValue);
    }

    numberReturn(length: number): Array<number> {
        let result: Array<number> = [];

        for (let i = 1; i <= length; i++) {
            result.push(i);
        }

        return result;
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