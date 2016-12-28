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
var localized_component_1 = require('./localized.component');
var validate_service_1 = require('../validate/validate.service');
var tab_module_1 = require('../tab/tab.module');
var LocalizedModule = (function () {
    function LocalizedModule() {
    }
    LocalizedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                tab_module_1.TabModule
            ],
            declarations: [
                localized_component_1.LocalizedComponent
            ],
            exports: [
                localized_component_1.LocalizedComponent
            ],
            providers: [validate_service_1.ValidateService]
        }), 
        __metadata('design:paramtypes', [])
    ], LocalizedModule);
    return LocalizedModule;
}());
exports.LocalizedModule = LocalizedModule;
//# sourceMappingURL=localized.module.js.map