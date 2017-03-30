import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ButtonComponent } from './button.component';

export { ButtonComponent } from './button.component';

const COMPONENTS = [
    ButtonComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ButtonsModule {
    static forRoot(): ModuleWithProviders { return {ngModule: ButtonsModule, providers: []}; }
}