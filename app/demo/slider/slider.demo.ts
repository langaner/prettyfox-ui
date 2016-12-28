import { Component, OnInit } from '@angular/core';

import { SliderSettings } from '../../components/slider/slider.interfaces'

@Component({
    moduleId: module.id,
    selector: 'slider-demo',
    templateUrl: 'slider.demo.html'
})
export class SliderDemoComponent implements OnInit {
    public value: number = 5;
    public multipleValue: any = {
        start: 10,
        end: 50
    };

    public settings: SliderSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}