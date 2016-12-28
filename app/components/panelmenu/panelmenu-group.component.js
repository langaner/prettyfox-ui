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
var PanelmenuGroupComponent = (function () {
    function PanelmenuGroupComponent(router) {
        this.router = router;
    }
    PanelmenuGroupComponent.prototype.ngOnInit = function () { };
    PanelmenuGroupComponent.prototype.toggle = function (event, child) {
        event.preventDefault();
        if (child.disabled) {
            return;
        }
        if (child.route) {
            this.router.navigate([child.route]);
        }
        else {
            child.showed = !child.showed;
        }
    };
    PanelmenuGroupComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    PanelmenuGroupComponent.prototype.countChildrens = function (items, itemCounter) {
        if (itemCounter === void 0) { itemCounter = 0; }
        if (items.items.length > 0) {
            for (var index = 0; index < items.items.length; index++) {
                if (items.items[index].hasOwnProperty('items')) {
                    itemCounter = this.countChildrens(items.items[index], itemCounter);
                }
                itemCounter += 1;
            }
        }
        return itemCounter;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelmenuGroupComponent.prototype, "groups", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelmenuGroupComponent.prototype, "settings", void 0);
    PanelmenuGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-panelmenu-group',
            templateUrl: 'panelmenu-group.component.html',
            styleUrls: ['panelmenu-group.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PanelmenuGroupComponent);
    return PanelmenuGroupComponent;
}());
exports.PanelmenuGroupComponent = PanelmenuGroupComponent;
//# sourceMappingURL=panelmenu-group.component.js.map