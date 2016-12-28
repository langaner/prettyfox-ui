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
var index_1 = require('./buttons/index');
var index_2 = require('./input/index');
var index_3 = require('./textarea/index');
var index_4 = require('./alert/index');
var index_5 = require('./dropdown/index');
var index_6 = require('./tab/index');
var index_7 = require('./accordion/index');
var index_8 = require('./checkbox/index');
var index_9 = require('./radio/index');
var index_10 = require('./select/index');
var index_11 = require('./popover/index');
var index_12 = require('./tooltip/index');
var index_13 = require('./spinner/index');
var index_14 = require('./modal/index');
var index_15 = require('./switcher/index');
var index_16 = require('./slider/index');
var index_17 = require('./panel/index');
var index_18 = require('./progress/index');
var index_19 = require('./breadcrumb/index');
var index_20 = require('./pagination/index');
var index_21 = require('./multiselect/index');
var index_22 = require('./datepicker/index');
var index_23 = require('./colorpicker/index');
var index_24 = require('./fileuploader/index');
var index_25 = require('./slidereveal/index');
var index_26 = require('./tag/index');
var index_27 = require('./rating/index');
var index_28 = require('./editor/index');
var index_29 = require('./fieldset/index');
var index_30 = require('./tieredmenu/index');
var index_31 = require('./slidemenu/index');
var index_32 = require('./panelmenu/index');
var index_33 = require('./notify/index');
var index_34 = require('./highlight/index');
// import { VisualityModule } from './visuality/index';
var index_35 = require('./navbar/index');
var index_36 = require('./datagrid/index');
var index_37 = require('./scrollbar/index');
var index_38 = require('./validate/index');
// import { LocalizedModule } from './localized/index';
var overwrite_service_1 = require('./../shared/services/overwrite.service');
var helper_service_1 = require('./../shared/services/helper.service');
var dom_service_1 = require('./../shared/services/dom.service');
var COMPONENTS_MODULES = [
    index_1.ButtonsModule,
    index_2.InputModule,
    index_3.TextareaModule,
    index_4.AlertModule,
    index_5.DropdownModule,
    index_6.TabModule,
    index_7.AccordionModule,
    index_8.CheckboxModule,
    index_9.RadioModule,
    index_10.SelectModule,
    index_11.PopoverModule,
    index_12.TooltipModule,
    index_13.SpinnerModule,
    index_14.ModalModule,
    index_15.SwitcherModule,
    index_16.SliderModule,
    index_17.PanelModule,
    index_18.ProgressModule,
    index_19.BreadcrumbModule,
    index_20.PaginationModule,
    index_21.MultiselectModule,
    index_22.DatepickerModule,
    index_23.ColorpickerModule,
    index_24.FileuploaderModule,
    index_25.SliderevealModule,
    index_26.TagModule,
    index_27.RatingModule,
    index_28.EditorModule,
    index_29.FieldsetModule,
    index_30.TieredmenuModule,
    index_31.SlidemenuModule,
    index_32.PanelmenuModule,
    index_33.NotifyModule,
    index_34.HighlightModule,
    // VisualityModule,
    index_35.NavbarModule,
    index_36.DatagridModule,
    index_37.ScrollbarModule,
    index_38.ValidateModule,
];
var FoxModule = (function () {
    function FoxModule() {
    }
    FoxModule = __decorate([
        core_1.NgModule({
            exports: [
                COMPONENTS_MODULES
            ],
            providers: [
                overwrite_service_1.OverwriteService,
                helper_service_1.HelperService,
                dom_service_1.DomService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FoxModule);
    return FoxModule;
}());
exports.FoxModule = FoxModule;
//# sourceMappingURL=fox.module.js.map