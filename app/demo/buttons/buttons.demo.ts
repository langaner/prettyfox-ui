import { Component, OnInit } from '@angular/core';

import { ButtonsSettings } from '../../components/buttons/buttons.interfaces'

@Component({
    moduleId: module.id,
    selector: 'buttons-demo',
    templateUrl: 'buttons.demo.html'
})
export class ButtonsDemoComponent implements OnInit {
    public settings: ButtonsSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}