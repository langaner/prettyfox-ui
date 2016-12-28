import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SelectComponent } from './select.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        SelectComponent
    ],
    exports: [
        SelectComponent
    ]
})
export class SelectModule { }