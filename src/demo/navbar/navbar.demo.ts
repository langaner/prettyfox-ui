import { Component, OnInit } from '@angular/core';

import { NavbarItem } from '../../components/navbar/navbar.model';
import { testItems } from './navbar.data';

@Component({
    moduleId: module.id,
    selector: 'navbar-demo',
    templateUrl: 'navbar.demo.html'
})
export class NavbarDemoComponent implements OnInit {
    private items: NavbarItem[];
    
    constructor() { }

    ngOnInit() {
        this.items = testItems;
    }
}