import { Component, OnInit } from '@angular/core';

import { CheckboxSettings } from '../../components/checkbox/checkbox.interfaces'

@Component({
    moduleId: module.id,
    selector: 'checkbox-demo',
    templateUrl: 'checkbox.demo.html'
})
export class CheckboxDemoComponent implements OnInit {
    fieldOne: boolean = true;
    fieldTwo: boolean = false;
    values: Array<string> = ['one', 'two']
    colors: Array<string> = ['primary','success','info','warning','danger','inverse','secondary']

    public boolSettings: CheckboxSettings = {
        bool: true
    };

    public settings: CheckboxSettings = {
        bool: false
    };

    constructor() { }

    ngOnInit() { }
}