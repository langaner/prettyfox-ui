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
var visuality_dot_class_1 = require('./visuality-dot.class');
var visuality_dot_component_1 = require('./visuality-dot.component');
var VisualityComponent = (function () {
    function VisualityComponent(viewContainerRef, componentFactoryResolver, el) {
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.el = el;
        this.types = [];
        this.dots = [];
        this.defaultSettings = {
            height: 500
        };
        this.defaultLangs = {};
        this.defaultTypes = [
            {
                name: 'Round dot',
                alias: 'roundDot',
                component: ''
            }
        ];
    }
    VisualityComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.langs = Object.assign(this.defaultLangs, this.langs);
        this.types = Object.assign(this.defaultTypes, this.types);
        this.canvasId = 'popover-' + Math.round(Math.random() * (999999 - 1) + 1);
    };
    VisualityComponent.prototype.ngAfterViewInit = function () {
        this.canvasEl = document.getElementById(this.canvasId);
        this.canvasInit(this.canvasEl);
        this.drawDots();
    };
    VisualityComponent.prototype.canvasInit = function (canvas) {
        this.canvasContext = canvas.getContext('2d');
    };
    VisualityComponent.prototype.clearCanvas = function () {
        this.canvasContext.clearRect(0, 0, this.canvasEl.offsetWidth, this.canvasEl.offsetHeight);
    };
    VisualityComponent.prototype.drawDots = function () {
        if (this.dots.length == 0) {
            return;
        }
        for (var index = 0; index < this.dots.length; index++) {
            var dot = this.dots[index];
            var ref = this.createDotClass(dot);
        }
    };
    VisualityComponent.prototype.createDotClass = function (dot) {
        var bindingOptions = new visuality_dot_class_1.DotClass({
            dot: dot,
            canvas: this.canvasEl
        });
        var binding = core_1.ReflectiveInjector.resolve([
            {
                provide: visuality_dot_class_1.DotClass, useValue: bindingOptions
            }
        ]);
        var childInjector = core_1.ReflectiveInjector.fromResolvedProviders(binding, this.viewContainerRef.parentInjector);
        console.log(visuality_dot_component_1.VisualityDotComponent);
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(visuality_dot_component_1.VisualityDotComponent);
        console.log('2');
        return this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
    };
    VisualityComponent.prototype.onMouseDown = function (event) {
        // console.log(event);
    };
    VisualityComponent.prototype.onMouseUp = function (event) {
        // console.log(event);
    };
    VisualityComponent.prototype.onMouseMove = function (event) {
        // console.log(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VisualityComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], VisualityComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VisualityComponent.prototype, "types", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VisualityComponent.prototype, "dots", void 0);
    VisualityComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-visuality',
            templateUrl: 'visuality.component.html',
            styleUrls: ['visuality.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentFactoryResolver, core_1.ElementRef])
    ], VisualityComponent);
    return VisualityComponent;
}());
exports.VisualityComponent = VisualityComponent;
//# sourceMappingURL=visuality.component.js.map