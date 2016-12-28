"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var validate_service_1 = require('../../components/validate/validate.service');
var ValidateDemoComponent = (function () {
    function ValidateDemoComponent(fb) {
        this.fb = fb;
        this.settings = {};
        this.options = [
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
    }
    ValidateDemoComponent.prototype.ngOnInit = function () {
        this.testForm = this.fb.group({
            input: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            textarea: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            checkbox: [false, [validate_service_1.ValidateService.equal(true)]],
            select: ['', [forms_1.Validators.required]],
            multiselect: [[], [forms_1.Validators.minLength(2)]],
            switcher: [false, [validate_service_1.ValidateService.equal(true)]],
            spinner: [1, [validate_service_1.ValidateService.min(3)]],
            rating: [0, [validate_service_1.ValidateService.min(5)]],
            radio: ['one', [validate_service_1.ValidateService.equal('one')]],
            editor: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            datepicker: ['', [forms_1.Validators.required]],
            tag: [[], [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            slider: [1, [validate_service_1.ValidateService.min(50)]],
            colorpicker: ['#ff0000', [validate_service_1.ValidateService.equal('#ffa500')]],
            fileuploader: ['', [forms_1.Validators.required]],
        });
    };
    ValidateDemoComponent.prototype.onSubmit = function (model, isValid) {
        this.submitted = true;
        console.log(model, isValid);
    };
    ValidateDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'validate-demo',
            templateUrl: 'validate.demo.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ValidateDemoComponent);
    return ValidateDemoComponent;
}());
exports.ValidateDemoComponent = ValidateDemoComponent;
//# sourceMappingURL=validate.demo.js.map