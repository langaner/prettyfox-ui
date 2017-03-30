import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { RadioComponent } from './radio.component';

export { RadioComponent } from './radio.component';

const COMPONENTS = [
    RadioComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class RadioModule {
    static forRoot(): ModuleWithProviders { return {ngModule: RadioModule, providers: []}; }
}