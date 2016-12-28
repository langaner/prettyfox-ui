import { NgModule, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TabComponent } from './tab.component';
import { TabSetComponent } from './tabset.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TabComponent,
        TabSetComponent
    ],
    exports: [
        TabComponent,
        TabSetComponent
    ],
    providers: [QueryList]
})
export class TabModule { }