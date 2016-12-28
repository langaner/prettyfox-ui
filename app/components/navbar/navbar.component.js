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
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var NavbarComponent = (function () {
    function NavbarComponent(el, router, overwriteService) {
        this.el = el;
        this.router = router;
        this.overwriteService = overwriteService;
        this.defaultSettings = overwriteService.getSettings('navbar');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    NavbarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    NavbarComponent.prototype.onClickOutside = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside && false == this.settings.showOnHover) {
            this.collapseAll();
        }
    };
    NavbarComponent.prototype.collapseAll = function () {
        for (var item in this.model) {
            this.model[item].showed = false;
        }
    };
    NavbarComponent.prototype.enterItem = function (event, item) {
        if (item.disabled || false == this.settings.showOnHover) {
            return;
        }
        item.showed = true;
    };
    NavbarComponent.prototype.leaveItem = function (event, item) {
        if (false == this.settings.showOnHover) {
            return;
        }
        item.showed = false;
    };
    NavbarComponent.prototype.clickItem = function (event, item) {
        if (item.disabled) {
            return;
        }
        if (this.settings.showOnHover == false) {
            this.collapseAll();
            item.showed = !item.showed;
            event.preventDefault();
            return;
        }
        if (item.route) {
            event.preventDefault();
            this.router.navigate([item.route]);
        }
    };
    NavbarComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NavbarComponent.prototype, "model", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], NavbarComponent.prototype, "onClickOutside", null);
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-navbar',
            templateUrl: 'navbar.component.html',
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, overwrite_service_1.OverwriteService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map