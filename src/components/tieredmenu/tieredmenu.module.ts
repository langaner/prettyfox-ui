import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TieredmenuComponent } from './tieredmenu.component';
import { TieredmenuItemComponent } from './tieredmenu-item.component';

export { TieredmenuComponent } from './tieredmenu.component';
export { TieredmenuItemComponent } from './tieredmenu-item.component';

const COMPONENTS = [
    TieredmenuComponent,
    TieredmenuItemComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TieredmenuModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TieredmenuModule, providers: []}; }
}