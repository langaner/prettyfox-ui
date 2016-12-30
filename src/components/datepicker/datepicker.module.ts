import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { DatepickerComponent } from './datepicker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DatepickerComponent
    ],
    exports: [
        DatepickerComponent
    ]
})
export class DatepickerModule { }