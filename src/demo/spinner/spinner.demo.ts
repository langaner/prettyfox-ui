import { Component, OnInit } from '@angular/core';

import { SpinnerSettings } from '../../components/spinner/spinner.model'

@Component({
    moduleId: module.id,
    selector: 'spinner-demo',
    templateUrl: 'spinner.demo.html'
})
export class SpinnerDemoComponent implements OnInit {
    public value: number;
    public settings: SpinnerSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}