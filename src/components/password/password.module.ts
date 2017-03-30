import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { PasswordComponent } from './password.component';

export { PasswordComponent } from './password.component';

const COMPONENTS = [
    PasswordComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PasswordModule {
    static forRoot(): ModuleWithProviders { return {ngModule: PasswordModule, providers: []}; }
}