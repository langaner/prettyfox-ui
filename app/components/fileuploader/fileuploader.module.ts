import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { FileuploaderComponent } from './fileuploader.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        FileuploaderComponent
    ],
    exports: [
        FileuploaderComponent
    ]
})
export class FileuploaderModule { }