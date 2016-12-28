import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { SliderevealComponent } from './slidereveal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SliderevealComponent
    ],
    exports: [
        SliderevealComponent
    ]
})
export class SliderevealModule { }