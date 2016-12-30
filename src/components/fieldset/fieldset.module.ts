import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { FieldsetComponent } from './fieldset.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FieldsetComponent
    ],
    exports: [
        FieldsetComponent
    ]
})
export class FieldsetModule { }