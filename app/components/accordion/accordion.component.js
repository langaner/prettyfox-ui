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
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.tabs = [];
        this.closed = new core_1.EventEmitter();
        this.opened = new core_1.EventEmitter();
    }
    AccordionComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AccordionComponent.prototype, "closed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AccordionComponent.prototype, "opened", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'fox-accordion',
            template: "\n        <div class=\"panel-group\">\n    \t\t<ng-content></ng-content>\n    \t</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map