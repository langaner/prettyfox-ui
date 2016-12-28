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
var notify_service_1 = require('../../components/notify/notify.service');
var NotifyDemoComponent = (function () {
    function NotifyDemoComponent(notifyService) {
        this.notifyService = notifyService;
        this.settings = {};
    }
    NotifyDemoComponent.prototype.ngOnInit = function () { };
    NotifyDemoComponent.prototype.error = function (event) {
        this.notifyService.error('Error!', 'Error notify content', { duration: 2000, closeble: true });
    };
    NotifyDemoComponent.prototype.info = function (event) {
        this.notifyService.info('Info!', 'Info notify content', { duration: 5, closeble: false });
    };
    NotifyDemoComponent.prototype.success = function (event) {
        this.notifyService.success('Success!', 'Success notify content', { duration: 50, closeble: true });
    };
    NotifyDemoComponent.prototype.warning = function (event) {
        this.notifyService.warning('Warning', 'Warning notify content', { duration: 10, closeble: false });
    };
    NotifyDemoComponent.prototype.message = function (event) {
        this.notifyService.message('Message', 'Message notify content', { duration: 5, closeble: true });
    };
    NotifyDemoComponent.prototype.clear = function () {
        this.notifyService.removeAll();
    };
    NotifyDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notify-demo',
            templateUrl: 'notify.demo.html'
        }), 
        __metadata('design:paramtypes', [notify_service_1.NotifyService])
    ], NotifyDemoComponent);
    return NotifyDemoComponent;
}());
exports.NotifyDemoComponent = NotifyDemoComponent;
//# sourceMappingURL=notify.demo.js.map