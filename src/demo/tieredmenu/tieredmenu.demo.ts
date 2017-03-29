import { Component, OnInit } from '@angular/core';

import { TieredmenuItem } from '../../components/tieredmenu/tieredmenu.model';
import { testItems } from './tieredmenu.data';

@Component({
    moduleId: module.id,
    selector: 'tieredmenu-demo',
    templateUrl: 'tieredmenu.demo.html'
})
export class TieredmenuDemoComponent implements OnInit {
    public items: TieredmenuItem[];
    
    constructor() { }

    ngOnInit() {
        this.items = testItems;
    }
}