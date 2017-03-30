import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { RatingComponent } from './rating.component';

export { RatingComponent } from './rating.component';

const COMPONENTS = [
    RatingComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class RatingModule {
    static forRoot(): ModuleWithProviders { return {ngModule: RatingModule, providers: []}; }
}