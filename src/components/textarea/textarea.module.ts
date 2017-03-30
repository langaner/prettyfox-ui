import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TextareaComponent } from './textarea.component';

export { TextareaComponent } from './textarea.component';

const COMPONENTS = [
    TextareaComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TextareaModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TextareaModule, providers: []}; }
}