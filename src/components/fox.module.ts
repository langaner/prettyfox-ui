import { NgModule } from '@angular/core';

import { ButtonsModule } from './buttons/index';
import { InputModule } from './input/index';
import { TextareaModule } from './textarea/index';
import { AlertModule } from './alert/index';
import { DropdownModule } from './dropdown/index';
import { TabModule } from './tab/index';
import { AccordionModule } from './accordion/index';
import { CheckboxModule } from './checkbox/index';
import { RadioModule } from './radio/index';
import { SelectModule } from './select/index';
import { PopoverModule } from './popover/index';
import { TooltipModule } from './tooltip/index';
import { SpinnerModule } from './spinner/index';
import { ModalModule } from './modal/index';
import { SwitcherModule } from './switcher/index';
import { SliderModule } from './slider/index';
import { PanelModule } from './panel/index';
import { ProgressModule } from './progress/index';
import { BreadcrumbModule } from './breadcrumb/index';
import { PaginationModule } from './pagination/index';
import { MultiselectModule } from './multiselect/index';
import { DatepickerModule } from './datepicker/index';
import { ColorpickerModule } from './colorpicker/index';
import { FileuploaderModule } from './fileuploader/index';
import { SliderevealModule } from './slidereveal/index';
import { TagModule } from './tag/index';
import { RatingModule } from './rating/index';
import { EditorModule } from './editor/index';
import { FieldsetModule } from './fieldset/index';
import { TieredmenuModule } from './tieredmenu/index';
import { SlidemenuModule } from './slidemenu/index';
import { PanelmenuModule } from './panelmenu/index';
import { NotifyModule } from './notify/index';
import { HighlightModule } from './highlight/index';
import { NavbarModule } from './navbar/index';
import { DatagridModule } from './datagrid/index';
import { ScrollbarModule } from './scrollbar/index';
import { ValidateModule } from './validate/index';
import { PasswordModule } from './password/index';
import { TypeaheadModule } from './typeahead/index';
// import { LocalizedModule } from './localized/index';

import { OverwriteService } from './../shared/services/overwrite.service';
import { HelperService } from './../shared/services/helper.service';
import { DomService } from './../shared/services/dom.service';

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
    TypeaheadModule
    // LocalizedModule
];

@NgModule({
    exports: [ 
        COMPONENTS_MODULES
    ],
    providers: [
        OverwriteService,
        HelperService,
        DomService
    ]
})
export class FoxModule { }