import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { RadioComponent } from './radio.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        RadioComponent
    ],
    exports: [
        RadioComponent
    ]
})
export class RadioModule { }