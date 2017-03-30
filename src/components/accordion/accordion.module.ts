import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AccordionComponent } from './accordion.component';
import { AccordionTabComponent } from './accordiontab.component';

export { AccordionComponent } from './accordion.component';
export { AccordionTabComponent } from './accordiontab.component';

const COMPONENTS = [
    AccordionComponent,
    AccordionTabComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AccordionModule {
    static forRoot(): ModuleWithProviders { return {ngModule: AccordionModule, providers: []}; }
}