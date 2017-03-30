import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoundPipe } from './round.pipe';
import { KeysPipe } from './keys.pipe';

export { RoundPipe } from './round.pipe';
export { KeysPipe } from './keys.pipe';

const PIPES = [
    RoundPipe,
    KeysPipe
];

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: PIPES,
    exports: PIPES
})
export class PipesModule {
    static forRoot(): ModuleWithProviders { return {ngModule: PipesModule, providers: []}; }
}