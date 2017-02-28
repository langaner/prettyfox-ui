import { 
    Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter   
} from '@angular/core';

import { DatagridLangs } from './datagrid.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-datagrid-sort',
    templateUrl: 'datagrid-sort.component.html',
    styleUrls: ['datagrid-sort.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DatagridSortComponent implements OnInit {
    @Input() name: string;
    @Input() label: string;
    @Input() sortedField: string;
    @Input() sortedOrder: string;

    @Output() sorted: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    changeSort(event: any, field: string): void {
        this.sortedField = field;
        this.sortedOrder = (this.sortedOrder == 'desc') ? 'asc' : 'desc';

        this.sorted.emit({sortedField: this.sortedField, sortedOrder: this.sortedOrder});
    }
}