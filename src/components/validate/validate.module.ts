import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ValidateComponent } from './validate.component';
import { ValidateService } from './validate.service';

export { ValidateComponent } from './validate.component';
export { ValidateService } from './validate.service';

const COMPONENTS = [
    ValidateComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ValidateModule {
    static forRoot(): ModuleWithProviders { return {ngModule: ValidateModule, providers: [ValidateService]}; }
}