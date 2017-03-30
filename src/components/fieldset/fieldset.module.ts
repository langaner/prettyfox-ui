import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { FieldsetComponent } from './fieldset.component';

export { FieldsetComponent } from './fieldset.component';

const COMPONENTS = [
    FieldsetComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class FieldsetModule {
    static forRoot(): ModuleWithProviders { return {ngModule: FieldsetModule, providers: []}; }
}