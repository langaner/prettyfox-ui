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
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var ValidateComponent = (function () {
    function ValidateComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.validated = true;
        this.defaultSettings = overwriteService.getSettings('validate');
        this.defaultLangs = overwriteService.getLangs('validate');
    }
    ValidateComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
    };
    ValidateComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    Object.defineProperty(ValidateComponent.prototype, "errorClass", {
        get: function () {
            return (this.errorLabel) ? 'has-' + this.settings.errorColor : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidateComponent.prototype, "errorLabel", {
        get: function () {
            if (this.validated && this.control && this.control.errors) {
                for (var propertyName in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(propertyName) && this.control.pristine === false) {
                        return this.getErrorMessage(propertyName, this.control.errors[propertyName]);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ValidateComponent.prototype.getErrorMessage = function (name, value) {
        if (value && this.langs[name]) {
            for (var key in value) {
                this.langs[name] = this.langs[name].replace(':' + key, value[key]);
            }
        }
        else {
            return 'undefined';
        }
        return this.langs[name];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ValidateComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ValidateComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ValidateComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ValidateComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ValidateComponent.prototype, "help", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ValidateComponent.prototype, "validated", void 0);
    ValidateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-validate',
            templateUrl: 'validate.component.html',
            styleUrls: ['validate.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], ValidateComponent);
    return ValidateComponent;
}());
exports.ValidateComponent = ValidateComponent;
//# sourceMappingURL=validate.component.js.map