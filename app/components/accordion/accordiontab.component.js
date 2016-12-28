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
var accordion_component_1 = require('./accordion.component');
var AccordionTabComponent = (function () {
    function AccordionTabComponent(accordion) {
        this.accordion = accordion;
        this.accordion.addTab(this);
    }
    AccordionTabComponent.prototype.toggle = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        var index = this.findIndex();
        if (this.selected) {
            this.selected = !this.selected;
            this.accordion.closed.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                this.closeAllTabs();
            }
            this.selected = true;
            this.accordion.opened.emit({ originalEvent: event, index: index });
        }
        event.stopPropagation();
    };
    AccordionTabComponent.prototype.findIndex = function () {
        var index = -1;
        if (this.accordion) {
            for (var i = 0; i < this.accordion.tabs.length; i++) {
                if (this.accordion.tabs[i] == this) {
                    return i;
                }
            }
        }
    };
    AccordionTabComponent.prototype.closeAllTabs = function () {
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            this.accordion.tabs[i].selected = false;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionTabComponent.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionTabComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AccordionTabComponent.prototype, "disabled", void 0);
    AccordionTabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-accordion-tab',
            templateUrl: 'accordiontab.component.html',
            styleUrls: ['accordiontab.component.css']
        }), 
        __metadata('design:paramtypes', [accordion_component_1.AccordionComponent])
    ], AccordionTabComponent);
    return AccordionTabComponent;
}());
exports.AccordionTabComponent = AccordionTabComponent;
//# sourceMappingURL=accordiontab.component.js.map