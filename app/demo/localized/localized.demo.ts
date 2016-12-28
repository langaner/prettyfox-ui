import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { LocalizedSettings } from '../../components/localized/localized.interfaces';
import { ValidateService } from '../../components/validate/validate.service';

@Component({
    moduleId: module.id,
    selector: 'localized-demo',
    templateUrl: 'localized.demo.html'
})
export class LocalizedDemoComponent implements OnInit {
    public testForm: FormGroup;
    public settings: LocalizedSettings = {
        'locales': ['ru', 'en', 'fr']
    };

    protected submitted: boolean;

    constructor(
        private fb: FormBuilder,
        private validateService: ValidateService
    ) { }

    ngOnInit() {
        this.testForm = this.fb.group({
	        input: ['', [Validators.required, Validators.minLength(5)]],
            textarea: ['', [Validators.required, Validators.maxLength(100)]]
	    });
    }

    onSubmit(model: any, isValid: boolean): void { 
    	this.submitted = true; 

    	console.log(model, isValid);
    }
}