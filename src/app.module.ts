import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoModule } from './demo/demo.module';
import { ScrollbarModule } from './components/scrollbar/scrollbar.module';
import { PanelmenuModule } from './components/panelmenu/panelmenu.module';
import { OverwriteService } from './shared/services/overwrite.service';

@NgModule({
    exports: [
        DemoModule
    ],
    imports: [ 
        DemoModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        ScrollbarModule,
        PanelmenuModule
    ],
    declarations: [ 
        AppComponent
    ],
    providers: [
        {
            provide: APP_BASE_HREF, useValue : '/'
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        OverwriteService,
    ],
    bootstrap:    [ 
        AppComponent
    ]
})
export class AppModule { }