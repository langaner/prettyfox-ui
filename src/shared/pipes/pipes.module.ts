import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoundPipe } from './round.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        RoundPipe,
        KeysPipe
    ],
    exports: [
        RoundPipe,
        KeysPipe
    ]
})
export class PipesModule {

}