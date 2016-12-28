import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner.component';

import { PipesModule } from '../../shared/index';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ]
})
export class SpinnerModule { }