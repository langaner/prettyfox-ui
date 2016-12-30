import { Component, OnInit } from '@angular/core';

import { SwitcherSettings, SwitcherLangs } from '../../components/switcher/switcher.model';

@Component({
    moduleId: module.id,
    selector: 'switcher-demo',
    templateUrl: 'switcher.demo.html'
})
export class SwitcherDemoComponent implements OnInit {
    public value: any = true;
    public settings: SwitcherSettings = {
        
    };

    public langs: SwitcherLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}