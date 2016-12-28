import { Component, OnInit } from '@angular/core';

import { SliderevealSettings, SliderevealLangs } from '../../components/slidereveal/slidereveal.interfaces'

@Component({
    moduleId: module.id,
    selector: 'slidereveal-demo',
    templateUrl: 'slidereveal.demo.html'
})
export class SliderevealDemoComponent implements OnInit {
    public settings: SliderevealSettings = {
        
    };
    public langs: SliderevealLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}