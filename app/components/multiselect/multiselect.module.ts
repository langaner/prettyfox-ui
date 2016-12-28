import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { MultiselectComponent } from './multiselect.component';
import { MultiselectSearchPipe } from './multiselect-search.pipe';
import { CheckboxModule } from '../checkbox/index';
import { RadioModule } from '../radio/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        RadioModule
    ],
    declarations: [
        MultiselectComponent,
        MultiselectSearchPipe
    ],
    exports: [
        MultiselectComponent
    ]
})
export class  MultiselectModule { }