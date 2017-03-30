import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { SelectComponent } from './select.component';

export { SelectComponent } from './select.component';

const COMPONENTS = [
    SelectComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SelectModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SelectModule, providers: []}; }
}