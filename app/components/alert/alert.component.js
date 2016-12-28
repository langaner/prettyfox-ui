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
var AlertComponent = (function () {
    function AlertComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.closed = new core_1.EventEmitter();
        this.defaultSettings = overwriteService.getSettings('alert');
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    AlertComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    AlertComponent.prototype.onClose = function (event) {
        this.isClosed = !this.isClosed;
        this.closed.emit({ originalEvent: event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AlertComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AlertComponent.prototype, "closed", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-alert',
            templateUrl: 'alert.component.html'
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map