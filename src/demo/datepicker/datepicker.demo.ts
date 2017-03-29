import { Component, OnInit } from '@angular/core';

import { DatepickerSettings, DatepickerLangs } from '../../components/datepicker/datepicker.model'

@Component({
    moduleId: module.id,
    selector: 'datepicker-demo',
    templateUrl: 'datepicker.demo.html'
})
export class DatepickerDemoComponent implements OnInit {
    public date: string;
    public dates: Array<any>;

    public settings: DatepickerSettings = {
        
    };

    public langs: DatepickerLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}