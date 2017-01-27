import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoSectionComponent }  from './demo/demo.section';
import { OverwriteSectionComponent }  from './demo/overwrite.section';
import { TranslationsSectionComponent }  from './demo/translations.section';

const ROUTING_MODULES: Routes = [
	{
        path: '',
        component: DemoSectionComponent
    },
    {
        path: 'overwrite',
        component: OverwriteSectionComponent
    },
    {
        path: 'translation',
        component: TranslationsSectionComponent
    },
    {
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTING_MODULES)]
})
export class AppRoutingModule { }