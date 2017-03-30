import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PanelmenuComponent } from './panelmenu.component';
import { PanelmenuItemComponent } from './panelmenu-item.component';
import { PanelmenuGroupComponent } from './panelmenu-group.component';

export { PanelmenuComponent } from './panelmenu.component';
export { PanelmenuItemComponent } from './panelmenu-item.component';
export { PanelmenuGroupComponent } from './panelmenu-group.component';

const COMPONENTS = [
    PanelmenuComponent,
    PanelmenuItemComponent,
    PanelmenuGroupComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PanelmenuModule {
    static forRoot(): ModuleWithProviders { return {ngModule: PanelmenuModule, providers: []}; }
}