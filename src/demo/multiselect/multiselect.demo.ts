import { Component, OnInit } from '@angular/core';

import { MultiselectOption, MultiselectSettings } from '../../components/multiselect/multiselect.model';

@Component({
    moduleId: module.id,
    selector: 'multiselect-demo',
    templateUrl: 'multiselect.demo.html'
})
export class MultiselectDemoComponent implements OnInit {
    public selected: Array<number> = [1,3];
    public singleSelected: number = 2;
    public options: Array<MultiselectOption> = [];
    public settings: MultiselectSettings = {
        
    };

    constructor() { }

    ngOnInit() {
        for (var index = 1; index <= 8; index++) {
            this.options.push({ value: index, label: 'Option ' + index });
        }
    }

    get diagnostic() { return JSON.stringify(this.selected); }
}