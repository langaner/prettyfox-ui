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
var notify_service_1 = require('./notify.service');
var NotifyItemComponent = (function () {
    function NotifyItemComponent(notifyService) {
        this.notifyService = notifyService;
        this.created = new core_1.EventEmitter();
        this.deleted = new core_1.EventEmitter();
    }
    NotifyItemComponent.prototype.ngOnInit = function () {
        this.settings = {
            duration: !this.item.settings.duration ? this.duration : this.item.settings.duration,
            closeble: !this.item.settings.closeble ? this.closeble : this.item.settings.closeble
        };
        if (this.settings.duration !== 0) {
            this.startDuration();
        }
    };
    NotifyItemComponent.prototype.close = function (event, item) {
        event.preventDefault();
        this.notifyService.remove(item.id);
    };
    NotifyItemComponent.prototype.startDuration = function () {
        var _this = this;
        this.speed = this.settings.duration * 1000;
        this.timer = setTimeout(function () {
            _this.notifyService.remove(_this.item.id);
        }, this.speed);
    };
    NotifyItemComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NotifyItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NotifyItemComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotifyItemComponent.prototype, "maxItems", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotifyItemComponent.prototype, "closeble", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotifyItemComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NotifyItemComponent.prototype, "stopOnHover", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], NotifyItemComponent.prototype, "index", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotifyItemComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotifyItemComponent.prototype, "deleted", void 0);
    NotifyItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-notify-item',
            templateUrl: 'notify-item.component.html',
            styleUrls: ['notify-item.component.css']
        }), 
        __metadata('design:paramtypes', [notify_service_1.NotifyService])
    ], NotifyItemComponent);
    return NotifyItemComponent;
}());
exports.NotifyItemComponent = NotifyItemComponent;
//# sourceMappingURL=notify-item.component.js.map