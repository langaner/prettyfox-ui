import { Component, OnInit } from '@angular/core';

import { RadioSettings } from '../../components/radio/radio.interfaces'

@Component({
    moduleId: module.id,
    selector: 'radio-demo',
    templateUrl: 'radio.demo.html'
})
export class RadioDemoComponent implements OnInit {
    value: string = 'two'
    color: string = 'primary';

    public settings: RadioSettings = {
        color: 'danger'
    };
    
    constructor() { }

    ngOnInit() { }
}