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
var datagrid_component_1 = require('./datagrid.component');
var datagrid_filter_component_1 = require('./datagrid-filter.component');
var datagrid_sort_component_1 = require('./datagrid-sort.component');
var buttons_module_1 = require('../buttons/buttons.module');
var dropdown_module_1 = require('../dropdown/dropdown.module');
var popover_module_1 = require('../popover/popover.module');
var tooltip_module_1 = require('../tooltip/tooltip.module');
var select_module_1 = require('../select/select.module');
var input_module_1 = require('../input/input.module');
var checkbox_module_1 = require('../checkbox/checkbox.module');
var spinner_module_1 = require('../spinner/spinner.module');
var datepicker_module_1 = require('../datepicker/datepicker.module');
var switcher_module_1 = require('../switcher/switcher.module');
var pagination_module_1 = require('../pagination/pagination.module');
var pipes_module_1 = require('../../shared/pipes/pipes.module');
var DatagridModule = (function () {
    function DatagridModule() {
    }
    DatagridModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                buttons_module_1.ButtonsModule,
                dropdown_module_1.DropdownModule,
                popover_module_1.PopoverModule,
                tooltip_module_1.TooltipModule,
                select_module_1.SelectModule,
                pagination_module_1.PaginationModule,
                checkbox_module_1.CheckboxModule,
                spinner_module_1.SpinnerModule,
                datepicker_module_1.DatepickerModule,
                switcher_module_1.SwitcherModule,
                input_module_1.InputModule,
                pipes_module_1.PipesModule
            ],
            declarations: [
                datagrid_component_1.DatagridComponent,
                datagrid_filter_component_1.DatagridFilterComponent,
                datagrid_sort_component_1.DatagridSortComponent
            ],
            exports: [
                datagrid_component_1.DatagridComponent,
                datagrid_filter_component_1.DatagridFilterComponent,
                datagrid_sort_component_1.DatagridSortComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DatagridModule);
    return DatagridModule;
}());
exports.DatagridModule = DatagridModule;
//# sourceMappingURL=datagrid.module.js.map