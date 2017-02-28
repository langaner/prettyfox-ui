import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { EditorComponent } from './editor.component';
import { ContenteditableModel } from './contenteditable-model';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        EditorComponent,
        ContenteditableModel
    ],
    exports: [
        EditorComponent,
        ContenteditableModel
    ]
})
export class EditorModule { }