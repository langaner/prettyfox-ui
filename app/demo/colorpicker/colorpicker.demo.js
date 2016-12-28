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
var ColorpickerDemoComponent = (function () {
    function ColorpickerDemoComponent() {
        this.color = '#1c0de8';
        this.colorHex = '#e31717';
        this.colorRgb = 'rgb(227, 23, 23)';
        this.colorHue = 'hsv(0, 90%, 89%)';
        this.settings = {};
        this.langs = {};
    }
    ColorpickerDemoComponent.prototype.ngOnInit = function () { };
    ColorpickerDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'colorpicker-demo',
            templateUrl: 'colorpicker.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ColorpickerDemoComponent);
    return ColorpickerDemoComponent;
}());
exports.ColorpickerDemoComponent = ColorpickerDemoComponent;
//# sourceMappingURL=colorpicker.demo.js.map