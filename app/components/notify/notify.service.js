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
var NotifyService = (function () {
    function NotifyService() {
        this.emitter = new core_1.EventEmitter();
    }
    NotifyService.prototype.create = function (notify) {
        notify.id = Math.random().toString();
        this.emitter.next({
            command: 'create', notify: notify
        });
        return notify;
    };
    NotifyService.prototype.getEmitter = function () {
        return this.emitter;
    };
    NotifyService.prototype.error = function (title, content, settings) {
        return this.create({
            title: title,
            content: content,
            settings: settings,
            type: 'error'
        });
    };
    NotifyService.prototype.info = function (title, content, settings) {
        return this.create({
            title: title,
            content: content,
            settings: settings,
            type: 'info'
        });
    };
    NotifyService.prototype.success = function (title, content, settings) {
        return this.create({
            title: title,
            content: content,
            settings: settings,
            type: 'success'
        });
    };
    NotifyService.prototype.warning = function (title, content, settings) {
        return this.create({
            title: title,
            content: content,
            settings: settings,
            type: 'warning'
        });
    };
    NotifyService.prototype.message = function (title, content, settings) {
        return this.create({
            title: title,
            content: content,
            settings: settings,
            type: 'message'
        });
    };
    NotifyService.prototype.remove = function (notifyId) {
        this.emitter.next({
            command: 'remove',
            id: notifyId
        });
    };
    NotifyService.prototype.removeAll = function () {
        this.emitter.next({
            command: 'removeAll'
        });
    };
    NotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotifyService);
    return NotifyService;
}());
exports.NotifyService = NotifyService;
//# sourceMappingURL=notify.service.js.map