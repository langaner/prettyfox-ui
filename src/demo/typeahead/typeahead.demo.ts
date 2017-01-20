import { Component, OnInit } from '@angular/core';

import { TypeaheadSettings, TypeaheadLangs, LazyloadEvent } from '../../components/typeahead/typeahead.model'

@Component({
    moduleId: module.id,
    selector: 'typeahead-demo',
    templateUrl: 'typeahead.demo.html'
})
export class TypeaheadDemoComponent implements OnInit {
    public settings: TypeaheadSettings = {
        
    };

    public langs: TypeaheadLangs = {
        
    };

    public list: Array<any> = [
        {
            id: 1,
            title: "Test 1",
            value: 1
        },
        {
            id: 2,
            title: "Test 2",
            value: 2
        },
        {
            id: 3,
            title: "Test 3",
            value: 3
        },
        {
            id: 4,
            title: "Test 4",
            value: 4
        },
        {
            id: 5,
            title: "Test 5",
            value: 5
        }
    ];
    
    public lazyloadList: Array<any> = [];
    public sampleRows: Array<any> = [];
    public value: any;
    public lazyloadValue: any = 4;

    constructor() { }

    ngOnInit() {
        for (var index = 0; index < 100; index++) {
            this.sampleRows.push({
                id: index,
                title: 'Test ' + index,
                value: index
            });
        }
    }

    getData(event: LazyloadEvent) {
        this.lazyloadList = this.sampleRows.filter(
            item => (item.title.indexOf(event.value) != -1)
        );
    }
}