import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SliderComponent } from './slider.component';

export { SliderComponent } from './slider.component';

const COMPONENTS = [
    SliderComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SliderModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SliderModule, providers: []}; }
}