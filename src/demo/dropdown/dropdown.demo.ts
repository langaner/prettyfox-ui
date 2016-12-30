import { Component, OnInit } from '@angular/core';

import { DropdownSettings } from '../../components/dropdown/dropdown.model'

@Component({
    moduleId: module.id,
    selector: 'dropdown-demo',
    templateUrl: 'dropdown.demo.html'
})
export class DropdownDemoComponent implements OnInit {
    public settings: DropdownSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}