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
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var NotifyComponent = (function () {
    function NotifyComponent(el, notifyService, overwriteService) {
        this.el = el;
        this.notifyService = notifyService;
        this.overwriteService = overwriteService;
        this.created = new core_1.EventEmitter();
        this.deleted = new core_1.EventEmitter();
        this.notifies = [];
        this.defaultSettings = overwriteService.getSettings('notify');
    }
    NotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.listener = this.notifyService.getEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'removeAll':
                    _this.removeAll();
                    break;
                case 'remove':
                    _this.removeOne(item.id);
                    break;
                case 'create':
                    _this.create(item.notify);
                    break;
            }
        });
    };
    NotifyComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    NotifyComponent.prototype.create = function (item) {
        item.createdAt = new Date();
        this.latestNotify = item;
        if (this.settings.addToBottom) {
            if (this.notifies.length >= this.settings.maxItems) {
                this.notifies.splice(0, 1);
            }
            this.notifies.push(item);
        }
        else {
            if (this.notifies.length >= this.settings.maxItems) {
                this.notifies.splice(this.notifies.length - 1, 1);
            }
            this.notifies.splice(0, 0, item);
        }
        this.created.emit({ id: item.id });
    };
    NotifyComponent.prototype.removeAll = function () {
        this.notifies = [];
    };
    NotifyComponent.prototype.removeOne = function (id) {
        var _this = this;
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifies.forEach(function (notify, index) {
            if (notify.id === id) {
                _this.notifies.splice(index, 1);
            }
        });
        this.deleted.emit({ id: id });
    };
    NotifyComponent.prototype.getPositionClass = function () {
        return this.settings.position.map(function (el) {
            return 'fox-notify_position_' + el;
        }).join(' ');
    };
    NotifyComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NotifyComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotifyComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NotifyComponent.prototype, "deleted", void 0);
    NotifyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-notify',
            templateUrl: 'notify.component.html',
            styleUrls: ['notify.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, notify_service_1.NotifyService, overwrite_service_1.OverwriteService])
    ], NotifyComponent);
    return NotifyComponent;
}());
exports.NotifyComponent = NotifyComponent;
//# sourceMappingURL=notify.component.js.map