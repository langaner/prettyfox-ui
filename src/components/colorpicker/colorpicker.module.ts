import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { ColorpickerComponent } from './colorpicker.component';

export { ColorpickerComponent } from './colorpicker.component';

const COMPONENTS = [
    ColorpickerComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ColorpickerModule {
    static forRoot(): ModuleWithProviders { return {ngModule: ColorpickerModule, providers: []}; }
}