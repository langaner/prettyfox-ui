import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SafeHtmlPipe } from './safe.pipe';
import { RoundPipe } from './round.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        SafeHtmlPipe,
        RoundPipe,
        KeysPipe
    ],
    exports: [
        SafeHtmlPipe,
        RoundPipe,
        KeysPipe
    ]
})
export class PipesModule {

}