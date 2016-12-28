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
var router_1 = require('@angular/router');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var ButtonComponent = (function () {
    function ButtonComponent(el, router, overwriteService) {
        this.el = el;
        this.router = router;
        this.overwriteService = overwriteService;
        this.disabled = false;
        this.clicked = new core_1.EventEmitter();
        this.defaultSettings = overwriteService.getSettings('buttons');
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    ButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    Object.defineProperty(ButtonComponent.prototype, "isOutline", {
        get: function () {
            return (this.settings.outline) ? 'outline-' : '';
        },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (this.settings.url) {
            this.router.navigate([this.settings.url]);
        }
        this.clicked.emit({ originalEvent: event });
    };
    ButtonComponent.prototype.isRightPlacement = function () {
        return this.settings.iconPlacement == 'right';
    };
    ButtonComponent.prototype.isLeftPlacement = function () {
        return this.settings.iconPlacement == 'left';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ButtonComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ButtonComponent.prototype, "clicked", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-button',
            templateUrl: 'button.component.html',
            styleUrls: ['button.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, overwrite_service_1.OverwriteService])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map