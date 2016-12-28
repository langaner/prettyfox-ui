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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var demo_section_1 = require('./demo.section');
var overwrite_section_1 = require('./overwrite.section');
var translations_section_1 = require('./translations.section');
var index_1 = require('../components/index');
var demo_component_1 = require('./demo.component');
var highlight_component_1 = require('./highlight.component');
var buttons_demo_1 = require('./buttons/buttons.demo');
var input_demo_1 = require('./input/input.demo');
var textarea_demo_1 = require('./textarea/textarea.demo');
var alert_demo_1 = require('./alert/alert.demo');
var dropdown_demo_1 = require('./dropdown/dropdown.demo');
var tab_demo_1 = require('./tab/tab.demo');
var accordion_demo_1 = require('./accordion/accordion.demo');
var checkbox_demo_1 = require('./checkbox/checkbox.demo');
var radio_demo_1 = require('./radio/radio.demo');
var select_demo_1 = require('./select/select.demo');
var popover_demo_1 = require('./popover/popover.demo');
var tooltip_demo_1 = require('./tooltip/tooltip.demo');
var spinner_demo_1 = require('./spinner/spinner.demo');
var modal_demo_1 = require('./modal/modal.demo');
var switcher_demo_1 = require('./switcher/switcher.demo');
var slider_demo_1 = require('./slider/slider.demo');
var panel_demo_1 = require('./panel/panel.demo');
var progress_demo_1 = require('./progress/progress.demo');
var breadcrumb_demo_1 = require('./breadcrumb/breadcrumb.demo');
var pagination_demo_1 = require('./pagination/pagination.demo');
var multiselect_demo_1 = require('./multiselect/multiselect.demo');
var datepicker_demo_1 = require('./datepicker/datepicker.demo');
var colorpicker_demo_1 = require('./colorpicker/colorpicker.demo');
var fileuploader_demo_1 = require('./fileuploader/fileuploader.demo');
var slidereveal_demo_1 = require('./slidereveal/slidereveal.demo');
var tag_demo_1 = require('./tag/tag.demo');
var rating_demo_1 = require('./rating/rating.demo');
var editor_demo_1 = require('./editor/editor.demo');
var fieldset_demo_1 = require('./fieldset/fieldset.demo');
var tieredmenu_demo_1 = require('./tieredmenu/tieredmenu.demo');
var slidemenu_demo_1 = require('./slidemenu/slidemenu.demo');
var panelmenu_demo_1 = require('./panelmenu/panelmenu.demo');
var notify_demo_1 = require('./notify/notify.demo');
var highlight_demo_1 = require('./highlight/highlight.demo');
// import { VisualityDemoComponent } from './visuality/visuality.demo';
var navbar_demo_1 = require('./navbar/navbar.demo');
var datagrid_demo_1 = require('./datagrid/datagrid.demo');
var scrollbar_demo_1 = require('./scrollbar/scrollbar.demo');
var validate_demo_1 = require('./validate/validate.demo');
// import { LocalizedDemoComponent } from './localized/localized.demo';
var demo_routing_1 = require('./demo-routing');
var SECTIONS = [
    demo_section_1.DemoSectionComponent,
    overwrite_section_1.OverwriteSectionComponent,
    translations_section_1.TranslationsSectionComponent
];
var COMPONENTS_DEMOS = [
    demo_component_1.DemoComponent,
    highlight_component_1.HighlightComponent,
    buttons_demo_1.ButtonsDemoComponent,
    input_demo_1.InputDemoComponent,
    textarea_demo_1.TextareaDemoComponent,
    alert_demo_1.AlertDemoComponent,
    dropdown_demo_1.DropdownDemoComponent,
    tab_demo_1.TabDemoComponent,
    accordion_demo_1.AccordionDemoComponent,
    checkbox_demo_1.CheckboxDemoComponent,
    radio_demo_1.RadioDemoComponent,
    select_demo_1.SelectDemoComponent,
    popover_demo_1.PopoverDemoComponent,
    tooltip_demo_1.TooltipDemoComponent,
    spinner_demo_1.SpinnerDemoComponent,
    modal_demo_1.ModalDemoComponent,
    switcher_demo_1.SwitcherDemoComponent,
    slider_demo_1.SliderDemoComponent,
    panel_demo_1.PanelDemoComponent,
    progress_demo_1.ProgressDemoComponent,
    breadcrumb_demo_1.BreadcrumbDemoComponent,
    pagination_demo_1.PaginationDemoComponent,
    multiselect_demo_1.MultiselectDemoComponent,
    datepicker_demo_1.DatepickerDemoComponent,
    colorpicker_demo_1.ColorpickerDemoComponent,
    fileuploader_demo_1.FileuploaderDemoComponent,
    slidereveal_demo_1.SliderevealDemoComponent,
    tag_demo_1.TagDemoComponent,
    rating_demo_1.RatingDemoComponent,
    editor_demo_1.EditorDemoComponent,
    fieldset_demo_1.FieldsetDemoComponent,
    tieredmenu_demo_1.TieredmenuDemoComponent,
    slidemenu_demo_1.SlidemenuDemoComponent,
    panelmenu_demo_1.PanelmenuDemoComponent,
    notify_demo_1.NotifyDemoComponent,
    highlight_demo_1.HighlightDemoComponent,
    // VisualityDemoComponent,
    navbar_demo_1.NavbarDemoComponent,
    datagrid_demo_1.DatagridDemoComponent,
    scrollbar_demo_1.ScrollbarDemoComponent,
    validate_demo_1.ValidateDemoComponent,
];
var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                index_1.FoxModule,
                demo_routing_1.DEMO_ROUTES
            ],
            declarations: [
                SECTIONS,
                COMPONENTS_DEMOS
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map