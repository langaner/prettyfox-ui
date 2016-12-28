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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var tooltip_class_1 = require('./tooltip.class');
var dom_service_1 = require('../../shared/services/dom.service');
var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(el, settings, positionService) {
        this.el = el;
        this.positionService = positionService;
        this.close = new core_1.EventEmitter();
        this.top = '-9999';
        this.left = '-9999';
        this.settings = settings;
    }
    TooltipContainerComponent.prototype.ngOnInit = function () { };
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.calculatePosition();
        }, 0);
    };
    TooltipContainerComponent.prototype.calculatePosition = function () {
        var hostEl = this.settings.element.nativeElement;
        var targetEl = this.el.nativeElement.children[0];
        var placement = this.positionService.placement(hostEl, targetEl, this.settings.placement);
        this.left = placement.left;
        this.top = placement.top;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipContainerComponent.prototype, "close", void 0);
    TooltipContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-tooltip-container',
            templateUrl: 'tooltip-container.component.html',
            styleUrls: ['tooltip-container.component.css']
        }),
        __param(1, core_1.Inject(tooltip_class_1.TooltipClass)), 
        __metadata('design:paramtypes', [core_1.ElementRef, tooltip_class_1.TooltipClass, dom_service_1.DomService])
    ], TooltipContainerComponent);
    return TooltipContainerComponent;
}());
exports.TooltipContainerComponent = TooltipContainerComponent;
//# sourceMappingURL=tooltip-container.component.js.map