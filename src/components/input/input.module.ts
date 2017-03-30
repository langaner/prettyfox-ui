import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { InputComponent } from './input.component';

export { InputComponent } from './input.component';

const COMPONENTS = [
    InputComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class InputModule {
    static forRoot(): ModuleWithProviders { return {ngModule: InputModule, providers: []}; }
}