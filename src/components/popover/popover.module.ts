import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PopoverComponent } from './popover.component';
import { DomService } from '../../shared/services/dom.service';

export { PopoverComponent } from './popover.component';

const COMPONENTS = [
    PopoverComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        DomService
    ]
})
export class PopoverModule {
    static forRoot(): ModuleWithProviders { return {ngModule: PopoverModule, providers: []}; }
}