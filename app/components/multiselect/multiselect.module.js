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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var multiselect_component_1 = require('./multiselect.component');
var multiselect_search_pipe_1 = require('./multiselect-search.pipe');
var index_1 = require('../checkbox/index');
var index_2 = require('../radio/index');
var MultiselectModule = (function () {
    function MultiselectModule() {
    }
    MultiselectModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                index_1.CheckboxModule,
                index_2.RadioModule
            ],
            declarations: [
                multiselect_component_1.MultiselectComponent,
                multiselect_search_pipe_1.MultiselectSearchPipe
            ],
            exports: [
                multiselect_component_1.MultiselectComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MultiselectModule);
    return MultiselectModule;
}());
exports.MultiselectModule = MultiselectModule;
//# sourceMappingURL=multiselect.module.js.map