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
var FieldsetComponent = (function () {
    function FieldsetComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.toggled = new core_1.EventEmitter();
        this.defaultSettings = overwriteService.getSettings('fieldset');
    }
    FieldsetComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    FieldsetComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    FieldsetComponent.prototype.toggle = function (event) {
        this.isToggled = !this.isToggled;
        if (this.isToggled) {
            this.toggled.emit({ originalEvent: event });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FieldsetComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FieldsetComponent.prototype, "toggled", void 0);
    FieldsetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-fieldset',
            templateUrl: 'fieldset.component.html',
            styleUrls: ['fieldset.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], FieldsetComponent);
    return FieldsetComponent;
}());
exports.FieldsetComponent = FieldsetComponent;
//# sourceMappingURL=fieldset.component.js.map