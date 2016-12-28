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
var PanelmenuComponent = (function () {
    function PanelmenuComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.defaultSettings = overwriteService.getSettings('panelmenu');
    }
    PanelmenuComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    PanelmenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelmenuComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelmenuComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelmenuComponent.prototype, "disabled", void 0);
    PanelmenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-panelmenu',
            templateUrl: 'panelmenu.component.html',
            styleUrls: ['panelmenu.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], PanelmenuComponent);
    return PanelmenuComponent;
}());
exports.PanelmenuComponent = PanelmenuComponent;
//# sourceMappingURL=panelmenu.component.js.map