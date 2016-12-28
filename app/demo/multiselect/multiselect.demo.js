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
var MultiselectDemoComponent = (function () {
    function MultiselectDemoComponent() {
        this.selected = [1, 3];
        this.singleSelected = 2;
        this.options = [];
        this.settings = {};
    }
    MultiselectDemoComponent.prototype.ngOnInit = function () {
        for (var index = 1; index <= 8; index++) {
            this.options.push({ value: index, label: 'Option ' + index });
        }
    };
    Object.defineProperty(MultiselectDemoComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.selected); },
        enumerable: true,
        configurable: true
    });
    MultiselectDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'multiselect-demo',
            templateUrl: 'multiselect.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MultiselectDemoComponent);
    return MultiselectDemoComponent;
}());
exports.MultiselectDemoComponent = MultiselectDemoComponent;
//# sourceMappingURL=multiselect.demo.js.map