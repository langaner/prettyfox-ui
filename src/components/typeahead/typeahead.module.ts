import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { TypeaheadComponent } from './typeahead.component';
import { TypeaheadSearchPipe } from './typeahead-search.pipe';

export { TypeaheadComponent } from './typeahead.component';
export { TypeaheadSearchPipe } from './typeahead-search.pipe';

const COMPONENTS = [
    TypeaheadComponent,
    TypeaheadSearchPipe
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TypeaheadModule {
    static forRoot(): ModuleWithProviders { return {ngModule: TypeaheadModule, providers: []}; }
}