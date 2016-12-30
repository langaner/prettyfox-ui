import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TooltipDirective } from './tooltip.directive';
import { TooltipContainerComponent } from './tooltip-container.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TooltipDirective,
        TooltipContainerComponent
    ],
    entryComponents: [
        TooltipContainerComponent
    ],
    exports: [
        TooltipDirective
    ]
})
export class TooltipModule { }