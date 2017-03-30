import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HighlightDirective } from './highlight.directive';

const DIRECTIVES = [
    HighlightDirective
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class HighlightModule {
    static forRoot(): ModuleWithProviders { return {ngModule: HighlightModule, providers: []}; }
}