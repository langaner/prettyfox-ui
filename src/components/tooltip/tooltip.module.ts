import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container.component';
import { DomService } from '../../shared/services/dom.service';

export { TooltipDirective } from './tooltip.directive';
export { TooltipContainerComponent } from './tooltip-container.component';

const COMPONENTS = [
    TooltipDirective,
    TooltipContainerComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [
        TooltipContainerComponent
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        DomService
    ]
})
export class TooltipModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TooltipModule, providers: []}; }
}