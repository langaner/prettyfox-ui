import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { DatepickerComponent } from './datepicker.component';

export { DatepickerComponent } from './datepicker.component';

const COMPONENTS = [
    DatepickerComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class DatepickerModule {
    static forRoot(): ModuleWithProviders { return {ngModule: DatepickerModule, providers: []}; }
}