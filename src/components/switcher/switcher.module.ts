import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwitcherComponent } from './switcher.component';

export { SwitcherComponent } from './switcher.component';

const COMPONENTS = [
    SwitcherComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SwitcherModule {
    static forRoot(): ModuleWithProviders { return {ngModule: SwitcherModule, providers: []}; }
}