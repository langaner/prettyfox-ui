import { Component, OnInit } from '@angular/core';

import { PanelSettings } from '../../components/panel/panel.interfaces'

@Component({
    moduleId: module.id,
    selector: 'panel-demo',
    templateUrl: 'panel.demo.html'
})
export class PanelDemoComponent implements OnInit {
    public settings: PanelSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}