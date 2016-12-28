"use strict";
var router_1 = require('@angular/router');
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
exports.routes = [
    {
        path: 'buttons',
        component: buttons_demo_1.ButtonsDemoComponent
    },
    {
        path: 'input',
        component: input_demo_1.InputDemoComponent
    },
    {
        path: 'textarea',
        component: textarea_demo_1.TextareaDemoComponent
    },
    {
        path: 'alert',
        component: alert_demo_1.AlertDemoComponent
    },
    {
        path: 'dropdown',
        component: dropdown_demo_1.DropdownDemoComponent
    },
    {
        path: 'tab',
        component: tab_demo_1.TabDemoComponent
    },
    {
        path: 'accordion',
        component: accordion_demo_1.AccordionDemoComponent
    },
    {
        path: 'checkbox',
        component: checkbox_demo_1.CheckboxDemoComponent
    },
    {
        path: 'radio',
        component: radio_demo_1.RadioDemoComponent
    },
    {
        path: 'select',
        component: select_demo_1.SelectDemoComponent
    },
    {
        path: 'popover',
        component: popover_demo_1.PopoverDemoComponent
    },
    {
        path: 'tooltip',
        component: tooltip_demo_1.TooltipDemoComponent
    },
    {
        path: 'spinner',
        component: spinner_demo_1.SpinnerDemoComponent
    },
    {
        path: 'modal',
        component: modal_demo_1.ModalDemoComponent
    },
    {
        path: 'switcher',
        component: switcher_demo_1.SwitcherDemoComponent
    },
    {
        path: 'slider',
        component: slider_demo_1.SliderDemoComponent
    },
    {
        path: 'panel',
        component: panel_demo_1.PanelDemoComponent
    },
    {
        path: 'progress',
        component: progress_demo_1.ProgressDemoComponent
    },
    {
        path: 'breadcrumb',
        component: breadcrumb_demo_1.BreadcrumbDemoComponent
    },
    {
        path: 'pagination',
        component: pagination_demo_1.PaginationDemoComponent
    },
    {
        path: 'multiselect',
        component: multiselect_demo_1.MultiselectDemoComponent
    },
    {
        path: 'datepicker',
        component: datepicker_demo_1.DatepickerDemoComponent
    },
    {
        path: 'colorpicker',
        component: colorpicker_demo_1.ColorpickerDemoComponent
    },
    {
        path: 'fileuploader',
        component: fileuploader_demo_1.FileuploaderDemoComponent
    },
    {
        path: 'slidereveal',
        component: slidereveal_demo_1.SliderevealDemoComponent
    },
    {
        path: 'tag',
        component: tag_demo_1.TagDemoComponent
    },
    {
        path: 'rating',
        component: rating_demo_1.RatingDemoComponent
    },
    {
        path: 'editor',
        component: editor_demo_1.EditorDemoComponent
    },
    {
        path: 'fieldset',
        component: fieldset_demo_1.FieldsetDemoComponent
    },
    {
        path: 'tieredmenu',
        component: tieredmenu_demo_1.TieredmenuDemoComponent
    },
    {
        path: 'slidemenu',
        component: slidemenu_demo_1.SlidemenuDemoComponent
    },
    {
        path: 'panelmenu',
        component: panelmenu_demo_1.PanelmenuDemoComponent
    },
    {
        path: 'notify',
        component: notify_demo_1.NotifyDemoComponent
    },
    {
        path: 'highlight',
        component: highlight_demo_1.HighlightDemoComponent
    },
    // {
    //     path: 'visuality',
    //     component: VisualityDemoComponent
    // },
    {
        path: 'navbar',
        component: navbar_demo_1.NavbarDemoComponent
    },
    {
        path: 'datagrid',
        component: datagrid_demo_1.DatagridDemoComponent
    },
    {
        path: 'scrollbar',
        component: scrollbar_demo_1.ScrollbarDemoComponent
    },
    {
        path: 'validate',
        component: validate_demo_1.ValidateDemoComponent
    },
];
exports.DEMO_ROUTES = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=demo-routing.js.map