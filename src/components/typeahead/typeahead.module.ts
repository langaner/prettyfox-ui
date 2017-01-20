import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { TypeaheadComponent } from './typeahead.component';
import { TypeaheadSearchPipe } from './typeahead-search.pipe';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        TypeaheadComponent,
        TypeaheadSearchPipe
    ],
    exports: [
        TypeaheadComponent
    ]
})
export class TypeaheadModule { }