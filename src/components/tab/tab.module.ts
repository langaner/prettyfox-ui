import { NgModule, ModuleWithProviders, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { TabComponent } from './tab.component';
import { TabSetComponent } from './tabset.component';

export { TabComponent } from './tab.component';
export { TabSetComponent } from './tabset.component';

const COMPONENTS = [
    TabComponent,
    TabSetComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [QueryList]
})
export class TabModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TabModule, providers: [QueryList]}; }
}