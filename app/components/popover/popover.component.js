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
var dom_service_1 = require('../../shared/services/dom.service');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var PopoverComponent = (function () {
    function PopoverComponent(el, positionService, overwriteService) {
        this.el = el;
        this.positionService = positionService;
        this.overwriteService = overwriteService;
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.top = '-9999';
        this.left = '-9999';
        this.defaultSettings = overwriteService.getSettings('popover');
    }
    PopoverComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.templateId = 'popover-' + Math.round(Math.random() * (999999 - 1) + 1);
    };
    PopoverComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    PopoverComponent.prototype.onClickOutside = function (event, targetElement) {
        if (this.settings.dismissible == false) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({ originalEvent: event });
        }
    };
    PopoverComponent.prototype.show = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.disabled || this.dropped) {
            this.dropped = false;
            return;
        }
        this.dropped = !this.dropped;
        setTimeout(function () {
            _this.calculatePosition();
            _this.showed.emit({ originalEvent: event });
        }, 0);
    };
    PopoverComponent.prototype.calculatePosition = function () {
        var hostEl = this.el.nativeElement;
        var targetEl = document.getElementById(this.templateId);
        var placement = this.positionService.placement(hostEl, targetEl, this.settings.placement);
        this.left = placement.left;
        this.top = placement.top;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PopoverComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PopoverComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PopoverComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PopoverComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], PopoverComponent.prototype, "onClickOutside", null);
    PopoverComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-popover',
            templateUrl: 'popover.component.html',
            styleUrls: ['popover.component.css'],
            host: {
                'style': 'display: inline-block;'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, dom_service_1.DomService, overwrite_service_1.OverwriteService])
    ], PopoverComponent);
    return PopoverComponent;
}());
exports.PopoverComponent = PopoverComponent;
//# sourceMappingURL=popover.component.js.map