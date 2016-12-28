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
var common_1 = require('@angular/common');
var accordion_component_1 = require('./accordion.component');
var accordiontab_component_1 = require('./accordiontab.component');
var AccordionModule = (function () {
    function AccordionModule() {
    }
    AccordionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                accordion_component_1.AccordionComponent,
                accordiontab_component_1.AccordionTabComponent
            ],
            exports: [
                accordion_component_1.AccordionComponent,
                accordiontab_component_1.AccordionTabComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionModule);
    return AccordionModule;
}());
exports.AccordionModule = AccordionModule;
//# sourceMappingURL=accordion.module.js.map