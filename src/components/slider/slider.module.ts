import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SliderComponent } from './slider.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        SliderComponent
    ],
    exports: [
        SliderComponent
    ]
})
export class SliderModule { }