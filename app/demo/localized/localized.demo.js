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
var LocalizedDemoComponent = (function () {
    function LocalizedDemoComponent(fb, validateService) {
        this.fb = fb;
        this.validateService = validateService;
        this.settings = {
            'locales': ['ru', 'en', 'fr']
        };
    }
    LocalizedDemoComponent.prototype.ngOnInit = function () {
        this.testForm = this.fb.group({
            input: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            textarea: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]]
        });
    };
    LocalizedDemoComponent.prototype.onSubmit = function (model, isValid) {
        this.submitted = true;
        console.log(model, isValid);
    };
    LocalizedDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'localized-demo',
            templateUrl: 'localized.demo.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, validate_service_1.ValidateService])
    ], LocalizedDemoComponent);
    return LocalizedDemoComponent;
}());
exports.LocalizedDemoComponent = LocalizedDemoComponent;
//# sourceMappingURL=localized.demo.js.map