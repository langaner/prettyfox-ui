import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { VisualityComponent } from './visuality.component';
import { VisualityDotComponent } from './visuality-dot.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        VisualityComponent,
        VisualityDotComponent
    ],
    entryComponents: [
        VisualityDotComponent
    ],
    exports: [
        VisualityComponent,
        VisualityDotComponent
    ]
})
export class VisualityModule { }