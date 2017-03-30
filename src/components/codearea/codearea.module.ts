import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CodeareaComponent } from './codearea.component';

export { CodeareaComponent } from './codearea.component';

const COMPONENTS = [
    CodeareaComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class CodeareaModule {
    static forRoot(): ModuleWithProviders { return {ngModule: CodeareaModule, providers: []}; }
}