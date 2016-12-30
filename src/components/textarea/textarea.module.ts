import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TextareaComponent } from './textarea.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        TextareaComponent
    ],
    exports: [
        TextareaComponent
    ]
})
export class TextareaModule { }