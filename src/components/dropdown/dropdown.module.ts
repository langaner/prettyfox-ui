import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { DropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-item.component';

export { DropdownComponent } from './dropdown.component';
export { DropdownItemComponent } from './dropdown-item.component';

const COMPONENTS = [
    DropdownComponent,
    DropdownItemComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class DropdownModule {
    static forRoot(): ModuleWithProviders { return {ngModule: DropdownModule, providers: []}; }
}