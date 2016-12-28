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
var ProgressComponent = (function () {
    function ProgressComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.defaultSettings = overwriteService.getSettings('progress');
    }
    ProgressComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    ProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    Object.defineProperty(ProgressComponent.prototype, "persentValue", {
        get: function () {
            return Math.round((this.value / this.settings.max) * 100);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProgressComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressComponent.prototype, "value", void 0);
    ProgressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-progress',
            templateUrl: 'progress.component.html',
            styleUrls: ['progress.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], ProgressComponent);
    return ProgressComponent;
}());
exports.ProgressComponent = ProgressComponent;
//# sourceMappingURL=progress.component.js.map