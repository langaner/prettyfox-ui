import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './navbar-item.component';
import { TieredmenuModule } from '../tieredmenu/tieredmenu.module';

export { NavbarComponent } from './navbar.component';
export { NavbarItemComponent } from './navbar-item.component';

const COMPONENTS = [
    NavbarComponent,
    NavbarItemComponent
];

@NgModule({
    imports: [
        CommonModule,
        TieredmenuModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class NavbarModule {
    static forRoot(): ModuleWithProviders { return {ngModule: NavbarModule, providers: []}; }
}