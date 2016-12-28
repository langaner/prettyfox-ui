import { RouterModule, Routes } from '@angular/router';

import { ButtonsDemoComponent } from './buttons/buttons.demo';
import { InputDemoComponent } from './input/input.demo';
import { TextareaDemoComponent } from './textarea/textarea.demo';
import { AlertDemoComponent } from './alert/alert.demo';
import { DropdownDemoComponent } from './dropdown/dropdown.demo';
import { TabDemoComponent } from './tab/tab.demo';
import { AccordionDemoComponent } from './accordion/accordion.demo';
import { CheckboxDemoComponent } from './checkbox/checkbox.demo';
import { RadioDemoComponent } from './radio/radio.demo';
import { SelectDemoComponent } from './select/select.demo';
import { PopoverDemoComponent } from './popover/popover.demo';
import { TooltipDemoComponent } from './tooltip/tooltip.demo';
import { SpinnerDemoComponent } from './spinner/spinner.demo';
import { ModalDemoComponent } from './modal/modal.demo';
import { SwitcherDemoComponent } from './switcher/switcher.demo';
import { SliderDemoComponent } from './slider/slider.demo';
import { PanelDemoComponent } from './panel/panel.demo';
import { ProgressDemoComponent } from './progress/progress.demo';
import { BreadcrumbDemoComponent } from './breadcrumb/breadcrumb.demo';
import { PaginationDemoComponent } from './pagination/pagination.demo';
import { MultiselectDemoComponent } from './multiselect/multiselect.demo';
import { DatepickerDemoComponent } from './datepicker/datepicker.demo';
import { ColorpickerDemoComponent } from './colorpicker/colorpicker.demo';
import { FileuploaderDemoComponent } from './fileuploader/fileuploader.demo';
import { SliderevealDemoComponent } from './slidereveal/slidereveal.demo';
import { TagDemoComponent } from './tag/tag.demo';
import { RatingDemoComponent } from './rating/rating.demo';
import { EditorDemoComponent } from './editor/editor.demo';
import { FieldsetDemoComponent } from './fieldset/fieldset.demo';
import { TieredmenuDemoComponent } from './tieredmenu/tieredmenu.demo';
import { SlidemenuDemoComponent } from './slidemenu/slidemenu.demo';
import { PanelmenuDemoComponent } from './panelmenu/panelmenu.demo';
import { NotifyDemoComponent } from './notify/notify.demo';
import { HighlightDemoComponent } from './highlight/highlight.demo';
// import { VisualityDemoComponent } from './visuality/visuality.demo';
import { NavbarDemoComponent } from './navbar/navbar.demo';
import { DatagridDemoComponent } from './datagrid/datagrid.demo';
import { ScrollbarDemoComponent } from './scrollbar/scrollbar.demo';
import { ValidateDemoComponent } from './validate/validate.demo';
// import { LocalizedDemoComponent } from './localized/localized.demo';

export const routes:Routes = [
    {
        path: 'buttons',
        component: ButtonsDemoComponent
    },
    {
        path: 'input',
        component: InputDemoComponent
    },
    {
        path: 'textarea',
        component: TextareaDemoComponent
    },
    {
        path: 'alert',
        component: AlertDemoComponent
    },
    {
        path: 'dropdown',
        component: DropdownDemoComponent
    },
    {
        path: 'tab',
        component: TabDemoComponent
    },
    {
        path: 'accordion',
        component: AccordionDemoComponent
    },
    {
        path: 'checkbox',
        component: CheckboxDemoComponent
    },
    {
        path: 'radio',
        component: RadioDemoComponent
    },
    {
        path: 'select',
        component: SelectDemoComponent
    },
    {
        path: 'popover',
        component: PopoverDemoComponent
    },
    {
        path: 'tooltip',
        component: TooltipDemoComponent
    },
    {
        path: 'spinner',
        component: SpinnerDemoComponent
    },
    {
        path: 'modal',
        component: ModalDemoComponent
    },
    {
        path: 'switcher',
        component: SwitcherDemoComponent
    },
    {
        path: 'slider',
        component: SliderDemoComponent
    },
    {
        path: 'panel',
        component: PanelDemoComponent
    },
    {
        path: 'progress',
        component: ProgressDemoComponent
    },
    {
        path: 'breadcrumb',
        component: BreadcrumbDemoComponent
    },
    {
        path: 'pagination',
        component: PaginationDemoComponent
    },
    {
        path: 'multiselect',
        component: MultiselectDemoComponent
    },
    {
        path: 'datepicker',
        component: DatepickerDemoComponent
    },
    {
        path: 'colorpicker',
        component: ColorpickerDemoComponent
    },
    {
        path: 'fileuploader',
        component: FileuploaderDemoComponent
    },
    {
        path: 'slidereveal',
        component: SliderevealDemoComponent
    },
    {
        path: 'tag',
        component: TagDemoComponent
    },
    {
        path: 'rating',
        component: RatingDemoComponent
    },
    {
        path: 'editor',
        component: EditorDemoComponent
    },
    {
        path: 'fieldset',
        component: FieldsetDemoComponent
    },
    {
        path: 'tieredmenu',
        component: TieredmenuDemoComponent
    },
    {
        path: 'slidemenu',
        component: SlidemenuDemoComponent
    },
    {
        path: 'panelmenu',
        component: PanelmenuDemoComponent
    },
    {
        path: 'notify',
        component: NotifyDemoComponent
    },
    {
        path: 'highlight',
        component: HighlightDemoComponent
    },
    // {
    //     path: 'visuality',
    //     component: VisualityDemoComponent
    // },
    {
        path: 'navbar',
        component: NavbarDemoComponent
    },
    {
        path: 'datagrid',
        component: DatagridDemoComponent
    },
    {
        path: 'scrollbar',
        component: ScrollbarDemoComponent
    },
    {
        path: 'validate',
        component: ValidateDemoComponent
    },
    // {
    //     path: 'localized',
    //     component: LocalizedDemoComponent
    // }
];

export const DEMO_ROUTES = RouterModule.forRoot(routes, {useHash: true});