import { Component, OnInit } from '@angular/core';

import { TabSettings } from '../../components/tab/tab.model'

@Component({
    moduleId: module.id,
    selector: 'tab-demo',
    templateUrl: 'tab.demo.html'
})
export class TabDemoComponent implements OnInit {
    public settings: TabSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}