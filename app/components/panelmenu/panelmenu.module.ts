import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PanelmenuComponent } from './panelmenu.component';
import { PanelmenuItemComponent } from './panelmenu-item.component';
import { PanelmenuGroupComponent } from './panelmenu-group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PanelmenuComponent,
        PanelmenuItemComponent,
        PanelmenuGroupComponent
    ],
    exports: [
        PanelmenuComponent,
        PanelmenuItemComponent,
        PanelmenuGroupComponent
    ]
})
export class PanelmenuModule { }