import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { SlidemenuComponent } from './slidemenu.component';
import { SlidemenuItemComponent } from './slidemenu-item.component';

export { SlidemenuComponent } from './slidemenu.component';
export { SlidemenuItemComponent } from './slidemenu-item.component';

const COMPONENTS = [
    SlidemenuComponent,
    SlidemenuItemComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SlidemenuModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SlidemenuModule, providers: []}; }
}