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
var dropdown_item_component_1 = require('./dropdown-item.component');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var DropdownComponent = (function () {
    function DropdownComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.submited = new core_1.EventEmitter();
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.defaultSettings = overwriteService.getSettings('dropdown');
    }
    DropdownComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    DropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    DropdownComponent.prototype.onClickOutside = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({ originalEvent: event });
        }
    };
    DropdownComponent.prototype.show = function (event) {
        if (this.disabled) {
            return;
        }
        this.dropped = !this.dropped;
        this.showed.emit({ originalEvent: event });
    };
    DropdownComponent.prototype.onSubmit = function (event) {
        this.submited.emit({ originalEvent: event });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownComponent.prototype, "submited", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DropdownComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.ContentChildren(dropdown_item_component_1.DropdownItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], DropdownComponent.prototype, "items", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], DropdownComponent.prototype, "onClickOutside", null);
    DropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-dropdown',
            templateUrl: 'dropdown.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], DropdownComponent);
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
//# sourceMappingURL=dropdown.component.js.map