import { Component, OnInit } from '@angular/core';

import { TooltipSettings } from '../../components/tooltip/tooltip.interfaces'

@Component({
    moduleId: module.id,
    selector: 'tooltip-demo',
    templateUrl: 'tooltip.demo.html'
})
export class TooltipDemoComponent implements OnInit {
    public settings: TooltipSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}