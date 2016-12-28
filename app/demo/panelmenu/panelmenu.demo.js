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
var panelmenu_data_1 = require('./panelmenu.data');
var PanelmenuDemoComponent = (function () {
    function PanelmenuDemoComponent() {
        this.settings = {};
    }
    PanelmenuDemoComponent.prototype.ngOnInit = function () {
        this.items = panelmenu_data_1.testItems;
    };
    PanelmenuDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'panelmenu-demo',
            templateUrl: 'panelmenu.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PanelmenuDemoComponent);
    return PanelmenuDemoComponent;
}());
exports.PanelmenuDemoComponent = PanelmenuDemoComponent;
//# sourceMappingURL=panelmenu.demo.js.map