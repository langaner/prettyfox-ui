import { RouterModule, Routes } from '@angular/router';

import { DemoSectionComponent }  from './demo/demo.section';
import { OverwriteSectionComponent }  from './demo/overwrite.section';
import { TranslationsSectionComponent }  from './demo/translations.section';

export const routes:Routes = [
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

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});