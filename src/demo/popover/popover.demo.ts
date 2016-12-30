import { Component, OnInit } from '@angular/core';

import { PopoverSettings } from '../../components/popover/popover.model'

@Component({
    moduleId: module.id,
    selector: 'popover-demo',
    templateUrl: 'popover.demo.html'
})
export class PopoverDemoComponent implements OnInit {
    public settings: PopoverSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}