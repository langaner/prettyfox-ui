import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AccordionComponent } from './accordion.component';
import { AccordionTabComponent } from './accordiontab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AccordionComponent,
        AccordionTabComponent
    ],
    exports: [
        AccordionComponent,
        AccordionTabComponent
    ]
})
export class AccordionModule { }