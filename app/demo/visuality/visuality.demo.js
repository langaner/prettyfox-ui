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
var VisualityDemoComponent = (function () {
    function VisualityDemoComponent() {
        this.settings = {};
        this.settings = {};
        this.dots = [
            {
                id: 1,
                name: 'test dot 1',
                description: 'test dot 1',
                type: 'roundDot',
                color: '#00ff00',
                width: 50,
                height: 50,
                x: 100,
                y: 100,
                disabled: false,
                editable: true,
                delitable: true,
                draggable: true
            },
            {
                id: 2,
                name: 'test dot 2',
                description: 'test dot 2',
                type: 'roundDot',
                color: '#ff0000',
                width: 50,
                height: 50,
                x: 100,
                y: 100,
                disabled: false,
                editable: true,
                delitable: true,
                draggable: true
            }
        ];
        this.types = [];
    }
    VisualityDemoComponent.prototype.ngOnInit = function () { };
    VisualityDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'visuality-demo',
            templateUrl: 'visuality.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VisualityDemoComponent);
    return VisualityDemoComponent;
}());
exports.VisualityDemoComponent = VisualityDemoComponent;
//# sourceMappingURL=visuality.demo.js.map