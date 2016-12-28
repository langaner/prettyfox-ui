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
var SelectDemoComponent = (function () {
    function SelectDemoComponent() {
        this.settings = {};
        this.options = [
            {
                label: 'Option 1',
                value: '1'
            },
            {
                label: 'Option 2',
                value: '2'
            },
            {
                label: 'Option 3',
                value: '3'
            }
        ];
    }
    SelectDemoComponent.prototype.ngOnInit = function () { };
    SelectDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-demo',
            templateUrl: 'select.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());
exports.SelectDemoComponent = SelectDemoComponent;
//# sourceMappingURL=select.demo.js.map