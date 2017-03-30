import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { PanelComponent } from './panel.component';

export { PanelComponent } from './panel.component';

const COMPONENTS = [
    PanelComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PanelModule {
    static forRoot(): ModuleWithProviders { return {ngModule: PanelModule, providers: []}; }
}