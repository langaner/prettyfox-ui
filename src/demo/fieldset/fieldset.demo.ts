import { Component, OnInit } from '@angular/core';

import { FieldsetSettings } from '../../components/fieldset/fieldset.model'

@Component({
    moduleId: module.id,
    selector: 'fieldset-demo',
    templateUrl: 'fieldset.demo.html'
})
export class FieldsetDemoComponent implements OnInit {
    public settings: FieldsetSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}