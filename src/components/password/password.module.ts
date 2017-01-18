import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { PasswordComponent } from './password.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        PasswordComponent
    ],
    exports: [
        PasswordComponent
    ]
})
export class PasswordModule { }