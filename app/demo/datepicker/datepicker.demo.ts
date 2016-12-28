import { Component, OnInit } from '@angular/core';

import { DatepickerSettings, DatepickerLangs } from '../../components/datepicker/datepicker.interfaces'

@Component({
    moduleId: module.id,
    selector: 'datepicker-demo',
    templateUrl: 'datepicker.demo.html'
})
export class DatepickerDemoComponent implements OnInit {
    public date: string;

    public settings: DatepickerSettings = {
        
    };

    public langs: DatepickerLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}