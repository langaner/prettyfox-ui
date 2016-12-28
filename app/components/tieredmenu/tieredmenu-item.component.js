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
var router_1 = require('@angular/router');
var TieredmenuItemComponent = (function () {
    function TieredmenuItemComponent(router) {
        this.router = router;
    }
    TieredmenuItemComponent.prototype.ngOnInit = function () { };
    TieredmenuItemComponent.prototype.enterItem = function (event, child) {
        if (child.disabled) {
            return;
        }
        child.showed = true;
    };
    TieredmenuItemComponent.prototype.leaveItem = function (event, child) {
        child.showed = false;
    };
    TieredmenuItemComponent.prototype.clickItem = function (event, child) {
        if (child.disabled) {
            event.preventDefault();
            return;
        }
        if (child.route) {
            event.preventDefault();
            this.router.navigate([child.route]);
        }
    };
    TieredmenuItemComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TieredmenuItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TieredmenuItemComponent.prototype, "root", void 0);
    TieredmenuItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-tieredmenu-item',
            templateUrl: 'tieredmenu-item.component.html',
            styleUrls: ['tieredmenu-item.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TieredmenuItemComponent);
    return TieredmenuItemComponent;
}());
exports.TieredmenuItemComponent = TieredmenuItemComponent;
//# sourceMappingURL=tieredmenu-item.component.js.map