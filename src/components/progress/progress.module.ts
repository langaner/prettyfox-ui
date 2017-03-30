import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ProgressComponent } from './progress.component';

export { ProgressComponent } from './progress.component';

const COMPONENTS = [
    ProgressComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ProgressModule {
    static forRoot(): ModuleWithProviders { return {ngModule: ProgressModule, providers: []}; }
}