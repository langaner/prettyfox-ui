import { Component, OnInit } from '@angular/core';

import { AlertSettings } from '../../components/alert/alert.interfaces'

@Component({
	moduleId: module.id,
	selector: 'alert-demo',
    templateUrl: 'alert.demo.html'
})
export class AlertDemoComponent implements OnInit {
	public settings: AlertSettings = {
        
    };

	constructor() { }

    ngOnInit() { }
}