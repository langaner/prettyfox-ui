import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { EditorComponent } from './editor.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        EditorComponent
    ],
    exports: [
        EditorComponent
    ]
})
export class EditorModule { }