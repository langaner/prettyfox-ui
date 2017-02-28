import { 
    Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter   
} from '@angular/core';

import { DatagridLangs } from './datagrid.model';
import { PopoverComponent } from '../popover/popover.component';

@Component({ 
    moduleId: module.id,
    selector: 'fox-datagrid-filter',
    templateUrl: 'datagrid-filter.component.html',
    styleUrls: ['datagrid-filter.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DatagridFilterComponent implements OnInit {
    @Input() row: any;
    @Input() langs: DatagridLangs;
    @Input() filters: any;
    @Input() filtersData: any;
    @Input() useEqual: boolean;
    @Input() equalOptions: Array<any>;
    @Input() booleanOptions: Array<any>;

    @Output() filtering: EventEmitter<any> = new EventEmitter();
    @Output() filterSubmited: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    filterChanged(event: any): void {
        this.filtering.emit(this.filtersData);
    }

    filterHandler(event: any, popover: PopoverComponent): void {
        popover.show(event);

        this.filterSubmited.emit(this.filtersData);
    }

    createSelectItem(data: any): Array<any> {
        let items: Array<any> = [];

        for(let item in data) {
            items.push({
                label: data[item].label,
                value: data[item].value
            });
        }

        return items;
    }
}