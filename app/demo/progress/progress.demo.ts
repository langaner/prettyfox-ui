import { Component, OnInit } from '@angular/core';

import { ProgressSettings } from '../../components/progress/progress.interfaces'

@Component({
    moduleId: module.id,
    selector: 'progress-demo',
    templateUrl: 'progress.demo.html'
})
export class ProgressDemoComponent implements OnInit {
    public value: number = 30;
    public settings: ProgressSettings = {
        
    };

    constructor() { }

    ngOnInit() { }
}