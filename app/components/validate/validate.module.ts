import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ValidateComponent } from './validate.component';
import { ValidateService } from './validate.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ValidateComponent
    ],
    exports: [
        ValidateComponent
    ],
    providers: [ValidateService]
})
export class ValidateModule { }