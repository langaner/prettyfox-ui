"use strict";
var router_1 = require('@angular/router');
var demo_section_1 = require('./demo/demo.section');
var overwrite_section_1 = require('./demo/overwrite.section');
var translations_section_1 = require('./demo/translations.section');
exports.routes = [
    {
        path: '',
        component: demo_section_1.DemoSectionComponent
    },
    {
        path: 'overwrite',
        component: overwrite_section_1.OverwriteSectionComponent
    },
    {
        path: 'translation',
        component: translations_section_1.TranslationsSectionComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
exports.APP_ROUTES = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app-routing.js.map