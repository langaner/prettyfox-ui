import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { SlidemenuComponent } from './slidemenu.component';
import { SlidemenuItemComponent } from './slidemenu-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlidemenuComponent,
        SlidemenuItemComponent
    ],
    exports: [
        SlidemenuComponent,
        SlidemenuItemComponent
    ]
})
export class SlidemenuModule { }