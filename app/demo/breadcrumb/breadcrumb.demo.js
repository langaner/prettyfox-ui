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
var BreadcrumbDemoComponent = (function () {
    function BreadcrumbDemoComponent() {
        this.items = [];
        this.items.push({ label: 'Test' });
        this.items.push({ label: 'Test 2' });
        this.items.push({ label: 'Test 3', url: 'https://wikipedia.org/' });
    }
    BreadcrumbDemoComponent.prototype.ngOnInit = function () { };
    BreadcrumbDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'breadcrumb-demo',
            templateUrl: 'breadcrumb.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbDemoComponent);
    return BreadcrumbDemoComponent;
}());
exports.BreadcrumbDemoComponent = BreadcrumbDemoComponent;
//# sourceMappingURL=breadcrumb.demo.js.map