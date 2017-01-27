import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoSectionComponent } from './demo.section';
import { OverwriteSectionComponent } from './overwrite.section';
import { TranslationsSectionComponent } from './translations.section';

import { FoxModule } from '../components/index';
import { DemoComponent } from './demo.component';

import { HighlightComponent } from './highlight.component';
import { ButtonsDemoComponent } from './buttons/buttons.demo';
import { InputDemoComponent } from './input/input.demo';
import { TextareaDemoComponent } from './textarea/textarea.demo';
import { AlertDemoComponent } from './alert/alert.demo';
import { DropdownDemoComponent } from './dropdown/dropdown.demo';
import { TabDemoComponent } from './tab/tab.demo';
import { AccordionDemoComponent }  from './accordion/accordion.demo';
import { CheckboxDemoComponent }  from './checkbox/checkbox.demo';
import { RadioDemoComponent }  from './radio/radio.demo';
import { SelectDemoComponent }  from './select/select.demo';
import { PopoverDemoComponent }  from './popover/popover.demo';
import { TooltipDemoComponent }  from './tooltip/tooltip.demo';
import { SpinnerDemoComponent }  from './spinner/spinner.demo';
import { ModalDemoComponent }  from './modal/modal.demo';
import { SwitcherDemoComponent }  from './switcher/switcher.demo';
import { SliderDemoComponent }  from './slider/slider.demo';
import { PanelDemoComponent }  from './panel/panel.demo';
import { ProgressDemoComponent }  from './progress/progress.demo';
import { BreadcrumbDemoComponent }  from './breadcrumb/breadcrumb.demo';
import { PaginationDemoComponent }  from './pagination/pagination.demo';
import { MultiselectDemoComponent }  from './multiselect/multiselect.demo';
import { DatepickerDemoComponent }  from './datepicker/datepicker.demo';
import { ColorpickerDemoComponent }  from './colorpicker/colorpicker.demo';
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
import { NavbarDemoComponent } from './navbar/navbar.demo';
import { DatagridDemoComponent } from './datagrid/datagrid.demo';
import { ScrollbarDemoComponent } from './scrollbar/scrollbar.demo';
import { ValidateDemoComponent } from './validate/validate.demo';
import { PasswordDemoComponent } from './password/password.demo';
import { TypeaheadDemoComponent } from './typeahead/typeahead.demo';
// import { LocalizedDemoComponent } from './localized/localized.demo';

import { DemoRoutingModule } from './demo-routing.module';

const SECTIONS = [
    DemoSectionComponent,
    OverwriteSectionComponent,
    TranslationsSectionComponent
];

const COMPONENTS_DEMOS = [
    DemoComponent,
    HighlightComponent,
    ButtonsDemoComponent,
    InputDemoComponent,
    TextareaDemoComponent,
    AlertDemoComponent,
    DropdownDemoComponent,
    TabDemoComponent,
    AccordionDemoComponent,
    CheckboxDemoComponent,
    RadioDemoComponent,
    SelectDemoComponent,
    PopoverDemoComponent,
    TooltipDemoComponent,
    SpinnerDemoComponent,
    ModalDemoComponent,
    SwitcherDemoComponent,
    SliderDemoComponent,
    PanelDemoComponent,
    ProgressDemoComponent,
    BreadcrumbDemoComponent,
    PaginationDemoComponent,
    MultiselectDemoComponent,
    DatepickerDemoComponent,
    ColorpickerDemoComponent,
    FileuploaderDemoComponent,
    SliderevealDemoComponent,
    TagDemoComponent,
    RatingDemoComponent,
    EditorDemoComponent,
    FieldsetDemoComponent,
    TieredmenuDemoComponent,
    SlidemenuDemoComponent,
    PanelmenuDemoComponent,
    NotifyDemoComponent,
    HighlightDemoComponent,
    NavbarDemoComponent,
    DatagridDemoComponent,
    ScrollbarDemoComponent,
    ValidateDemoComponent,
    PasswordDemoComponent,
    TypeaheadDemoComponent,
    // LocalizedDemoComponent
];

@NgModule({
    exports: [
        DemoRoutingModule
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DemoRoutingModule,
        FoxModule
    ],
    declarations: [ 
        SECTIONS,
        COMPONENTS_DEMOS
    ]
})

export class DemoModule {}