import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { InputComponent } from './input.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent
    ]
})
export class InputModule { }