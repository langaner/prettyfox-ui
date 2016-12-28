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
var DropdownItemComponent = (function () {
    function DropdownItemComponent(router) {
        this.router = router;
        this.clicked = new core_1.EventEmitter();
    }
    DropdownItemComponent.prototype.onClick = function (event) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.clicked.emit({ originalEvent: event, route: this.route });
        if (this.route) {
            this.router.navigate([this.route]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownItemComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropdownItemComponent.prototype, "route", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownItemComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownItemComponent.prototype, "divider", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownItemComponent.prototype, "clicked", void 0);
    DropdownItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-dropdown-item',
            template: "\n        <a class=\"dropdown-item fox-dropdown__item\" href=\"{{ route }}\" *ngIf=\"!divider\" \n        [class.disabled]=\"disabled\"\n        (click)=\"onClick($event)\"\n        >{{ label }}</a>\n        <div class=\"dropdown-divider fox-dropdown__divider\" *ngIf=\"divider\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DropdownItemComponent);
    return DropdownItemComponent;
}());
exports.DropdownItemComponent = DropdownItemComponent;
//# sourceMappingURL=dropdown-item.component.js.map