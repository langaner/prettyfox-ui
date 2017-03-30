import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ScrollbarDirective } from './scrollbar.directive';
import { DomService } from '../../shared/services/dom.service';

const DIRECTIVES = [
    ScrollbarDirective
]

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: DIRECTIVES,
    exports: DIRECTIVES,
    providers: [
        DomService
    ]
})
export class ScrollbarModule {
    static forRoot(): ModuleWithProviders { return {ngModule: ScrollbarModule, providers: []}; }
}