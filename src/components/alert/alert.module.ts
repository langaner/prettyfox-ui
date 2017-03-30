import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AlertComponent } from './alert.component';

export { AlertComponent } from './alert.component';

const COMPONENTS = [
    AlertComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AlertModule {
    static forRoot(): ModuleWithProviders { return {ngModule: AlertModule, providers: []}; }
}