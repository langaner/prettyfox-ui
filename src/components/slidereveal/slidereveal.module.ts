import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { SliderevealComponent } from './slidereveal.component';

export { SliderevealComponent } from './slidereveal.component';

const COMPONENTS = [
    SliderevealComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SliderevealModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SliderevealModule, providers: []}; }
}