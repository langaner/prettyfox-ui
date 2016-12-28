import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './navbar-item.component';
import { TieredmenuModule } from '../tieredmenu/tieredmenu.module';

@NgModule({
    imports: [
        CommonModule,
        TieredmenuModule
    ],
    declarations: [
        NavbarComponent,
        NavbarItemComponent
    ],
    exports: [
        NavbarComponent,
        NavbarItemComponent
    ]
})
export class NavbarModule { }