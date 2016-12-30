import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { CheckboxComponent } from './checkbox.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        CheckboxComponent
    ],
    exports: [
        CheckboxComponent
    ]
})
export class CheckboxModule { }