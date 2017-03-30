import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { CheckboxComponent } from './checkbox.component';

export { CheckboxComponent } from './checkbox.component';

const COMPONENTS = [
    CheckboxComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class CheckboxModule {
    static forRoot(): ModuleWithProviders { return {ngModule: CheckboxModule, providers: []}; }
}