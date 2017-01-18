import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FileuploaderComponent } from './fileuploader.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: [
        FileuploaderComponent
    ],
    exports: [
        FileuploaderComponent
    ]
})
export class FileuploaderModule { }