import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner.component';
import { PipesModule } from '../../shared/pipes/pipes.module';

export { SpinnerComponent } from './spinner.component';

const COMPONENTS = [
    SpinnerComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PipesModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SpinnerModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SpinnerModule, providers: []}; }
}