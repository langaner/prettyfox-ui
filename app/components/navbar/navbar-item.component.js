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
var NavbarItemComponent = (function () {
    function NavbarItemComponent(router) {
        this.router = router;
    }
    NavbarItemComponent.prototype.ngOnInit = function () { };
    NavbarItemComponent.prototype.enterItem = function (event, child) {
        if (child.disabled) {
            return;
        }
        child.showed = true;
    };
    NavbarItemComponent.prototype.leaveItem = function (event, child) {
        child.showed = false;
    };
    NavbarItemComponent.prototype.clickItem = function (event, child) {
        if (child.disabled) {
            event.preventDefault();
            return;
        }
        if (child.route) {
            event.preventDefault();
            this.router.navigate([child.route]);
        }
    };
    NavbarItemComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavbarItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavbarItemComponent.prototype, "root", void 0);
    NavbarItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-navbar-item',
            templateUrl: 'navbar-item.component.html',
            styleUrls: ['navbar-item.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavbarItemComponent);
    return NavbarItemComponent;
}());
exports.NavbarItemComponent = NavbarItemComponent;
//# sourceMappingURL=navbar-item.component.js.map