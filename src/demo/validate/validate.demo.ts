import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ValidateSettings } from '../../components/validate/validate.model';
import { ValidateService } from '../../components/validate/validate.service';

@Component({
    moduleId: module.id,
    selector: 'validate-demo',
    templateUrl: 'validate.demo.html'
})
export class ValidateDemoComponent implements OnInit {
    public testForm: FormGroup;
    public settings: ValidateSettings = {
        
    };
    public options: Array<any> = [
        {
            label: 'Option 1', 
            value: '1'
        },
        {
            label: 'Option 2', 
            value: '2'
        },
        {
            label: 'Option 3', 
            value: '3'
        }
    ];

    protected submitted: boolean;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.testForm = this.fb.group({
	        input: ['', [Validators.required, Validators.minLength(5)]],
            textarea: ['', [Validators.required, Validators.maxLength(100)]],
            checkbox: [false, [ValidateService.equal(true)]],
            select: ['', [Validators.required]],
            multiselect: [[], [Validators.minLength(2)]],
            switcher: [false, [ValidateService.equal(true)]],
            spinner: [1, [ValidateService.min(3)]],
            rating: [0, [ValidateService.min(5)]],
            radio: ['one', [ValidateService.equal('one')]],
            editor: ['', [Validators.required, Validators.maxLength(100)]],
            datepicker: ['', [Validators.required]],
            tag: [[], [Validators.required, Validators.minLength(3)]],
            slider: [1, [ValidateService.min(50)]],
            colorpicker: ['#ff0000', [ValidateService.equal('#ffa500')]]
	    });
    }
    
    onSubmit(model: any, isValid: boolean): void { 
    	this.submitted = true; 

    	console.log(model, isValid);
    }
}