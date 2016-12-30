import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { ColorpickerComponent } from './colorpicker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ColorpickerComponent
    ],
    exports: [
        ColorpickerComponent
    ]
})
export class ColorpickerModule { }