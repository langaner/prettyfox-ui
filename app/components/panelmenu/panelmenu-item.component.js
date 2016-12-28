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
var PanelmenuItemComponent = (function () {
    function PanelmenuItemComponent(router) {
        this.router = router;
        this.level = 1;
        this.paddingVale = 25;
    }
    PanelmenuItemComponent.prototype.ngOnInit = function () { };
    PanelmenuItemComponent.prototype.toggle = function (event, child) {
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
    PanelmenuItemComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelmenuItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PanelmenuItemComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PanelmenuItemComponent.prototype, "level", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PanelmenuItemComponent.prototype, "paddingVale", void 0);
    PanelmenuItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-panelmenu-item',
            templateUrl: 'panelmenu-item.component.html',
            styleUrls: ['panelmenu-item.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PanelmenuItemComponent);
    return PanelmenuItemComponent;
}());
exports.PanelmenuItemComponent = PanelmenuItemComponent;
//# sourceMappingURL=panelmenu-item.component.js.map