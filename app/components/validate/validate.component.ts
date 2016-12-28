import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';

import { ValidateSettings, ValidateLangs } from './validate.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-validate',
    templateUrl: 'validate.component.html',
    styleUrls: ['validate.component.css']
})
export class ValidateComponent implements OnInit, OnChanges {
    @Input() settings: ValidateSettings;
    @Input() langs: ValidateLangs;
    @Input() label: string;
    @Input() control: any;
    @Input() help: string;
    @Input() validated: boolean = true;
    
    protected defaultLangs: ValidateLangs;
    protected defaultSettings: ValidateSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('validate');
        this.defaultLangs = overwriteService.getLangs('validate');
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

    get errorClass(): string {
        return (this.errorLabel) ? 'has-' + this.settings.errorColor : '';
    }

    get errorLabel(): string {
        if (this.validated && this.control && this.control.errors) {
            for (let propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.pristine === false) {
                    return this.getErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
        }
        
        return null;
    }

    getErrorMessage(name: string, value?: any): string {
        if(value && this.langs[name]) {
            for (var key in value) {
                this.langs[name] = this.langs[name].replace(':' + key, value[key]);
            }
        } else {
            return 'undefined';
        }

        return this.langs[name];
    }
}