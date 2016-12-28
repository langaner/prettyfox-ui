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
var tooltip_container_component_1 = require('./tooltip-container.component');
var tooltip_class_1 = require('./tooltip.class');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var TooltipDirective = (function () {
    function TooltipDirective(viewContainerRef, componentFactoryResolver, el, overwriteService) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.el = el;
        this.overwriteService = overwriteService;
        this.showed = new core_1.EventEmitter();
        this.hided = new core_1.EventEmitter();
        this.defaultSettings = overwriteService.getSettings('tooltip');
    }
    TooltipDirective.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    TooltipDirective.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    TooltipDirective.prototype.show = function (event) {
        this.dropped = true;
        var bindingOptions = new tooltip_class_1.TooltipClass({
            color: this.settings.color,
            placement: this.settings.placement,
            title: this.settings.title,
            element: this.el
        });
        var binding = core_1.ReflectiveInjector.resolve([
            {
                provide: tooltip_class_1.TooltipClass, useValue: bindingOptions
            }
        ]);
        var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(binding, this.viewContainerRef.parentInjector);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(tooltip_container_component_1.TooltipContainerComponent);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
        this.showed.emit({ originalEvent: event });
    };
    TooltipDirective.prototype.hide = function (event) {
        this.dropped = false;
        this.componentRef.destroy();
        this.hided.emit({ originalEvent: event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "settings", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TooltipDirective.prototype, "hided", void 0);
    TooltipDirective = __decorate([
        core_1.Directive({
            selector: '[foxTooltip]',
            host: {
                '(mouseenter)': 'show($event)',
                '(mouseleave)': 'hide($event)'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], TooltipDirective);
    return TooltipDirective;
}());
exports.TooltipDirective = TooltipDirective;
//# sourceMappingURL=tooltip.directive.js.map