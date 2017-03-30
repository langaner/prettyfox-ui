import { NgModule, ModuleWithProviders } from '@angular/core';

import { ButtonsModule } from './buttons/buttons.module';
import { InputModule } from './input/input.module';
import { TextareaModule } from './textarea/textarea.module';
import { AlertModule } from './alert/alert.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { TabModule } from './tab/tab.module';
import { AccordionModule } from './accordion/accordion.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { PopoverModule } from './popover/popover.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { SpinnerModule } from './spinner/spinner.module';
import { ModalModule } from './modal/modal.module';
import { SwitcherModule } from './switcher/switcher.module';
import { SliderModule } from './slider/slider.module';
import { PanelModule } from './panel/panel.module';
import { ProgressModule } from './progress/progress.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { PaginationModule } from './pagination/pagination.module';
import { MultiselectModule } from './multiselect/multiselect.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { ColorpickerModule } from './colorpicker/colorpicker.module';
import { FileuploaderModule } from './fileuploader/fileuploader.module';
import { SliderevealModule } from './slidereveal/slidereveal.module';
import { TagModule } from './tag/tag.module';
import { RatingModule } from './rating/rating.module';
import { EditorModule } from './editor/editor.module';
import { FieldsetModule } from './fieldset/fieldset.module';
import { TieredmenuModule } from './tieredmenu/tieredmenu.module';
import { SlidemenuModule } from './slidemenu/slidemenu.module';
import { PanelmenuModule } from './panelmenu/panelmenu.module';
import { NotifyModule } from './notify/notify.module';
import { HighlightModule } from './highlight/highlight.module';
import { NavbarModule } from './navbar/navbar.module';
import { DatagridModule } from './datagrid/datagrid.module';
import { ScrollbarModule } from './scrollbar/scrollbar.module';
import { ValidateModule } from './validate/validate.module';
import { PasswordModule } from './password/password.module';
import { TypeaheadModule } from './typeahead/typeahead.module';
import { CodeareaModule } from './codearea/codearea.module';

import { OverwriteService } from './../shared/services/overwrite.service';
import { HelperService } from './../shared/services/helper.service';
import { DomService } from './../shared/services/dom.service';

export { ButtonsModule } from './buttons/buttons.module';
export { InputModule } from './input/input.module';
export { TextareaModule } from './textarea/textarea.module';
export { AlertModule } from './alert/alert.module';
export { DropdownModule } from './dropdown/dropdown.module';
export { TabModule } from './tab/tab.module';
export { AccordionModule } from './accordion/accordion.module';
export { CheckboxModule } from './checkbox/checkbox.module';
export { RadioModule } from './radio/radio.module';
export { SelectModule } from './select/select.module';
export { PopoverModule } from './popover/popover.module';
export { TooltipModule } from './tooltip/tooltip.module';
export { SpinnerModule } from './spinner/spinner.module';
export { ModalModule } from './modal/modal.module';
export { SwitcherModule } from './switcher/switcher.module';
export { SliderModule } from './slider/slider.module';
export { PanelModule } from './panel/panel.module';
export { ProgressModule } from './progress/progress.module';
export { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
export { PaginationModule } from './pagination/pagination.module';
export { MultiselectModule } from './multiselect/multiselect.module';
export { DatepickerModule } from './datepicker/datepicker.module';
export { ColorpickerModule } from './colorpicker/colorpicker.module';
export { FileuploaderModule } from './fileuploader/fileuploader.module';
export { SliderevealModule } from './slidereveal/slidereveal.module';
export { TagModule } from './tag/tag.module';
export { RatingModule } from './rating/rating.module';
export { EditorModule } from './editor/editor.module';
export { FieldsetModule } from './fieldset/fieldset.module';
export { TieredmenuModule } from './tieredmenu/tieredmenu.module';
export { SlidemenuModule } from './slidemenu/slidemenu.module';
export { PanelmenuModule } from './panelmenu/panelmenu.module';
export { NotifyModule, NotifyService } from './notify/notify.module';
export { HighlightModule } from './highlight/highlight.module';
export { NavbarModule } from './navbar/navbar.module';
export { DatagridModule } from './datagrid/datagrid.module';
export { ScrollbarModule } from './scrollbar/scrollbar.module';
export { ValidateModule, ValidateService } from './validate/validate.module';
export { PasswordModule } from './password/password.module';
export { TypeaheadModule } from './typeahead/typeahead.module';
export { CodeareaModule } from './codearea/codearea.module';

export { OverwriteService } from './../shared/services/overwrite.service';
export { HelperService } from './../shared/services/helper.service';
export { DomService } from './../shared/services/dom.service';

const SERVICES = [
    OverwriteService,
    HelperService,
    DomService
];

const COMPONENTS_MODULES = [
    ButtonsModule,
    InputModule,
    TextareaModule,
    AlertModule,
    DropdownModule,
    TabModule,
    AccordionModule,
    CheckboxModule,
    RadioModule,
    SelectModule,
    PopoverModule,
    TooltipModule,
    SpinnerModule,
    ModalModule,
    SwitcherModule,
    SliderModule,
    PanelModule,
    ProgressModule,
    BreadcrumbModule,
    PaginationModule,
    MultiselectModule,
    DatepickerModule,
    ColorpickerModule,
    FileuploaderModule,
    SliderevealModule,
    TagModule,
    RatingModule,
    EditorModule,
    FieldsetModule,
    TieredmenuModule,
    SlidemenuModule,
    PanelmenuModule,
    NotifyModule,
    HighlightModule,
    NavbarModule,
    DatagridModule,
    ScrollbarModule,
    ValidateModule,
    PasswordModule,
    TypeaheadModule,
    CodeareaModule
];

@NgModule({
    imports: [
        ButtonsModule.forRoot(),
        InputModule.forRoot(),
        TextareaModule.forRoot(),
        AlertModule.forRoot(),
        DropdownModule.forRoot(),
        TabModule.forRoot(),
        AccordionModule.forRoot(),
        CheckboxModule.forRoot(),
        RadioModule.forRoot(),
        SelectModule.forRoot(),
        PopoverModule.forRoot(),
        TooltipModule.forRoot(),
        SpinnerModule.forRoot(),
        ModalModule.forRoot(),
        SwitcherModule.forRoot(),
        SliderModule.forRoot(),
        PanelModule.forRoot(),
        ProgressModule.forRoot(),
        BreadcrumbModule.forRoot(),
        PaginationModule.forRoot(),
        MultiselectModule.forRoot(),
        DatepickerModule.forRoot(),
        ColorpickerModule.forRoot(),
        FileuploaderModule.forRoot(),
        SliderevealModule.forRoot(),
        TagModule.forRoot(),
        RatingModule.forRoot(),
        EditorModule.forRoot(),
        FieldsetModule.forRoot(),
        TieredmenuModule.forRoot(),
        SlidemenuModule.forRoot(),
        PanelmenuModule.forRoot(),
        NotifyModule.forRoot(),
        HighlightModule.forRoot(),
        NavbarModule.forRoot(),
        DatagridModule.forRoot(),
        ScrollbarModule.forRoot(),
        ValidateModule.forRoot(),
        PasswordModule.forRoot(),
        TypeaheadModule.forRoot(),
        CodeareaModule.forRoot()
    ],
    exports: COMPONENTS_MODULES
})
export class FoxRootModule { }

@NgModule({
    exports: COMPONENTS_MODULES,
    imports: COMPONENTS_MODULES,
})
export class FoxModule {
    static forRoot(): ModuleWithProviders { return {ngModule: FoxRootModule, providers: [SERVICES]}; }
}