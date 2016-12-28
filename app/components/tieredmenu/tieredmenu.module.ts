import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TieredmenuComponent } from './tieredmenu.component';
import { TieredmenuItemComponent } from './tieredmenu-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TieredmenuComponent,
        TieredmenuItemComponent
    ],
    exports: [
        TieredmenuComponent,
        TieredmenuItemComponent
    ]
})
export class TieredmenuModule { }