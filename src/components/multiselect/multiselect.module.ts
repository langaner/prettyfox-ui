import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { MultiselectComponent } from './multiselect.component';
import { MultiselectSearchPipe } from './multiselect-search.pipe';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { RadioModule } from '../radio/radio.module';
import { HelperService } from '../../shared/services/helper.service';

export { MultiselectComponent } from './multiselect.component';
export { MultiselectSearchPipe } from './multiselect-search.pipe';

const COMPONENTS = [
    MultiselectComponent,
    MultiselectSearchPipe
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CheckboxModule,
        RadioModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        HelperService
    ]
})
export class  MultiselectModule {
    static forRoot(): ModuleWithProviders { return {ngModule: MultiselectModule, providers: []}; }
}