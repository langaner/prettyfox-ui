import { Component, OnInit } from '@angular/core';

import { BreadcrumbItem } from "../../components/breadcrumb/breadcrumb.model"

@Component({
    moduleId: module.id,
    selector: 'breadcrumb-demo',
    templateUrl: 'breadcrumb.demo.html'
})
export class BreadcrumbDemoComponent implements OnInit {
    private items: Array<BreadcrumbItem>;

    constructor() {
        this.items = [];
        this.items.push({label:'Test'});
        this.items.push({label:'Test 2'});
        this.items.push({label:'Test 3', url: 'https://wikipedia.org/'});
    }

    ngOnInit() { }
}