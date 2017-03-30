import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { EditorComponent } from './editor.component';
import { ContenteditableModel } from './contenteditable-model';

export { EditorComponent } from './editor.component';
export { ContenteditableModel } from './contenteditable-model';

const COMPONENTS = [
    EditorComponent,
    ContenteditableModel
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class EditorModule {
    static forRoot(): ModuleWithProviders { return {ngModule: EditorModule, providers: []}; }
}