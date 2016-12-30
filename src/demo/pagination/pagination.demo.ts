import { Component, OnInit } from '@angular/core';

import { PaginationSettings, PaginationLangs } from '../../components/pagination/pagination.model'

@Component({
    moduleId: module.id,
    selector: 'pagination-demo',
    templateUrl: 'pagination.demo.html'
})
export class PaginationDemoComponent implements OnInit {
    public page: number = 4;
    public total: number = 10;
    public settings: PaginationSettings = {
        
    };
    public langs: PaginationLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}