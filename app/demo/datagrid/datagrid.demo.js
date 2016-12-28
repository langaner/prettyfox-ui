"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var datagrid_component_1 = require('../../components/datagrid/datagrid.component');
var DatagridDemoComponent = (function () {
    function DatagridDemoComponent() {
        this.settings = {
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
        this.routes = {
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
        this.filters = {
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
        this.sampleRows = [];
        this.rows = [];
    }
    DatagridDemoComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < 100; index++) {
            this.sampleRows.push({
                id: index,
                title: 'Item ' + index,
                alias: 'item-' + index,
                is_active: !!Math.floor(Math.random() * 2),
                description: 'Item description',
                status: Math.floor(Math.random() * 3) + 1,
                pub_date: new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
                position: index
            });
        }
    };
    DatagridDemoComponent.prototype.getData = function (event) {
        var _this = this;
        console.log(event);
        setTimeout(function () {
            _this.rows = _this.sampleRows.slice(event.first, (event.first + event.rows));
        }, 500);
    };
    DatagridDemoComponent.prototype.customCheckedAction = function () {
        console.log(this.datagrid.getChecked());
    };
    __decorate([
        core_1.ViewChild('datagrid'), 
        __metadata('design:type', datagrid_component_1.DatagridComponent)
    ], DatagridDemoComponent.prototype, "datagrid", void 0);
    DatagridDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datagrid-demo',
            templateUrl: 'datagrid.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DatagridDemoComponent);
    return DatagridDemoComponent;
}());
exports.DatagridDemoComponent = DatagridDemoComponent;
//# sourceMappingURL=datagrid.demo.js.map