import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwitcherComponent } from './switcher.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        SwitcherComponent
    ],
    exports: [
        SwitcherComponent
    ]
})
export class SwitcherModule { }