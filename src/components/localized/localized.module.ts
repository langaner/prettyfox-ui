import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { LocalizedComponent } from './localized.component';
import { ValidateService } from '../validate/validate.service';
import { TabModule } from '../tab/tab.module';

@NgModule({
    imports: [
        CommonModule,
        TabModule
    ],
    declarations: [
        LocalizedComponent
    ],
    exports: [
        LocalizedComponent
    ],
    providers: [ValidateService]
})
export class LocalizedModule { }