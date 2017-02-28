import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CodeareaComponent } from './codearea.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        CodeareaComponent
    ],
    exports: [
        CodeareaComponent
    ]
})
export class CodeareaModule { }