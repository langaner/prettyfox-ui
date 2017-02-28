import { Component, OnInit, ViewChild } from '@angular/core';

import { DatagridSettings, DatagridRoutes, LazyloadEvent } from '../../components/datagrid/datagrid.model';

import { DatagridComponent } from '../../components/datagrid/datagrid.component';

@Component({
    moduleId: module.id,
    selector: 'datagrid-demo',
    templateUrl: 'datagrid.demo.html'
})
export class DatagridDemoComponent implements OnInit {
    public settings: DatagridSettings = {
        customRowActions: [
            {
                name: "refresh",
                color: "info",
                icon: "refresh",
                title: "Refresh",
            }
        ],
        colsList: [
            {
                field: 'id',
                label: 'ID'
            },
            {
                field: 'title',
                label: 'Title'
            }, 
            {
                field: 'alias',
                label: 'Alias'
            }, 
            {
                field: 'is_active',
                label: 'Is active',
            }, 
            {
                field: 'pub_date',
                label: 'Pub date'
            }, 
            {
                field: 'status',
                label: 'Status',
                values: {
                    1: {
                        label: 'Published',
                        value: 1,
                        color: 'success'
                    },
                    2: {
                        label: 'Not published',
                        value: 2,
                        color: 'danger'
                    },
                    3: {
                        label: 'In moderation',
                        value: 3,
                        color: 'info'
                    }
                }
            }
        ]
    };
    public routes: DatagridRoutes = {
        edit: {
            'route': 'edit-url',
            'parametrs': ['id']
        },
        view: {
            'route': 'view-url',
            'parametrs': ['alias']
        },
        remove: {
            'route': 'remove-url',
            'parametrs': ['id']
        },
        create: {
            'route': 'create-url'
        }
    };

    public filters: any = {
        id: {
            field: 'id',
            type: 'number'
        },
        title: {
            field: 'title',
            type: 'string'
        },
        alias: { 
            field: 'alias',
            type: 'string'
        },
        is_active: {
            field: 'is_active',
            type: 'boolean'
        },
        pub_date: {
            field: 'pub_date',
            type: 'date'
        },
        status: {
            field: 'status',
            type: 'number'
        },
    };

    protected sampleRows: Array<any> = [];
    protected rows: Array<any> = [];

    @ViewChild('datagrid') datagrid: DatagridComponent;

    constructor() { }

    ngOnInit() {
        for (var index = 0; index < 100; index++) {
            this.sampleRows.push({
                id: index,
                title: 'Item ' + index,
                alias: 'item-' + index,
                is_active: !!Math.floor(Math.random() * 2),
                description: 'Item description',
                status: Math.floor(Math.random() * 3) + 1,
                pub_date: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)).toLocaleDateString(),
                position: index
            });
        }
    }

    getData(event: LazyloadEvent) {
        console.log(event);
        setTimeout(() => {
            this.rows = this.sampleRows.slice(event.first, (event.first + event.rows));
        }, 500);
    }

    customCheckedAction() {
        console.log(this.datagrid.getChecked());
    }
}