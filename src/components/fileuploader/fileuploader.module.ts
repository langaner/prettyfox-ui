import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FileuploaderComponent } from './fileuploader.component';

export { FileuploaderComponent } from './fileuploader.component';

const COMPONENTS = [
    FileuploaderComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class FileuploaderModule {
    static forRoot(): ModuleWithProviders { return {ngModule: FileuploaderModule, providers: []}; }
}