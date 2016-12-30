import { Component, OnInit } from '@angular/core';

import { PanelmenuItem, PanelmenuSettings } from '../../components/panelmenu/panelmenu.model';
import { testItems } from './panelmenu.data';

@Component({
    moduleId: module.id,
    selector: 'panelmenu-demo',
    templateUrl: 'panelmenu.demo.html'
})
export class PanelmenuDemoComponent implements OnInit {
    private items: PanelmenuItem[];

    protected settings: PanelmenuSettings = {
        
    };

    constructor() { }

    ngOnInit() {
        this.items = testItems;
    }
}