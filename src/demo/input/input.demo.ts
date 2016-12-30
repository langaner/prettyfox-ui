import { Component, OnInit } from '@angular/core';

import { InputSettings } from '../../components/input/input.model'

@Component({
    moduleId: module.id,
    selector: 'input-demo',
    templateUrl: 'input.demo.html'
})
export class InputDemoComponent implements OnInit {
    public settings: InputSettings = {
        
    };

    public value: string;

    constructor() { }

    ngOnInit() { }
}