import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { BreadcrumbComponent } from './breadcrumb.component';

export { BreadcrumbComponent } from './breadcrumb.component';

const COMPONENTS = [
    BreadcrumbComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class BreadcrumbModule {
    static forRoot(): ModuleWithProviders { return {ngModule: BreadcrumbModule, providers: []}; }
}