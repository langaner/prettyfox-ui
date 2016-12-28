import { Component, OnInit } from '@angular/core';

import { SlidemenuItem } from '../../components/slidemenu/slidemenu.interfaces';
import { testItems } from './slidemenu.data';

@Component({
    moduleId: module.id,
    selector: 'slidemenu-demo',
    templateUrl: 'slidemenu.demo.html'
})
export class SlidemenuDemoComponent implements OnInit {
    private items: SlidemenuItem[];
    
    constructor() { }

    ngOnInit() {
        this.items = testItems;
    }
}