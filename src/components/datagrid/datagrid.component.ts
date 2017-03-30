import { 
    Component, OnInit, OnChanges, Input, Output, ViewChild, ElementRef, ViewEncapsulation, EventEmitter, SimpleChange   
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { DatagridSettings, DatagridLangs, DatagridRoutes, DatagridFilter, RouteItem, LazyloadEvent } from './datagrid.model';
import { PaginationSettings } from '../pagination/pagination.model';
import { SelectSettings } from '../select/select.model';
import { PopoverComponent } from '../popover/popover.component';

import { OverwriteService } from '../../shared/services/overwrite.service';
import { HelperService } from '../../shared/services/helper.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-datagrid',
    templateUrl: 'datagrid.component.html',
    styleUrls: ['datagrid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DatagridComponent implements OnInit, OnChanges {
    @Input() settings: DatagridSettings;
    @Input() langs: DatagridLangs;
    @Input() routes: DatagridRoutes;
    @Input() filters: any;
    @Input() rows: Array<any> = [];
    @Input() checkedItems: Array<any> = [];
    @Input() total: number = 0;

    @Output() lazyLoad: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();
    @Output() removeSelected: EventEmitter<any> = new EventEmitter();
    @Output() rowClick: EventEmitter<any> = new EventEmitter();
    @Output() rowSelect: EventEmitter<any> = new EventEmitter();
    @Output() rowUnselect: EventEmitter<any> = new EventEmitter();
    @Output() rowAction: EventEmitter<any> = new EventEmitter();
    @Output() filtersReseted: EventEmitter<any> = new EventEmitter();
    @Output() filtersSubmited: EventEmitter<any> = new EventEmitter();
    @Output() sortSubmited: EventEmitter<any> = new EventEmitter();

    public isPreloaded: boolean;
    public totalPages: number = 1;

    protected totalRowsView: number;
    protected totalRowsViewOptions: Array<any> = [];
    protected paginationSettings: PaginationSettings = {
        max: 5
    }
    protected totalSettings: SelectSettings = {
        required: true
    }
    protected defaultLangs: DatagridLangs;
    protected defaultSettings: DatagridSettings;
    protected currentPage: number = 1;
    protected firstItem: number = 0;
    protected sortedField: string;
    protected sortedOrder: 'asc' | 'desc';
    protected viewedItemsCount: number = 0;
    protected filtersData: any = { };
    

    constructor(
        private router: Router, 
        private route: ActivatedRoute,
        private overwriteService: OverwriteService,
        private helperService: HelperService
    ) {
        this.defaultSettings = overwriteService.getSettings('datagrid');
        this.defaultLangs = overwriteService.getLangs('datagrid');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.sortedField = this.settings.defaultSortedField;
        this.sortedOrder = this.settings.defaultSortedOrder;

        if(this.settings.totalViewList.length) {
            for(let value in this.settings.totalViewList) {
                let total = this.settings.totalViewList[value];

                this.totalRowsViewOptions.push({
                    label: this.langs.totalRowsView + ' ' + total, 
                    value: total
                });
            }

            if(this.totalRowsViewOptions.length) {
                this.totalRowsView = this.totalRowsViewOptions[0].value;
            }
        }
        
        if(!this.rows || this.rows.length == 0) {
        	this.fireLazyLoadEvent();
        } else {
        	this.stopPreloader();
        }
        
        this.viewedItemsCount = this.getViewedItemsCount();
        this.totalPages = this.getTotalPages();
        this.filtersData = this.buildFiltersObject();
    }

    ngOnChanges(changes: any) {
        if(changes.rows) {
            this.stopPreloader();
        }

        if (changes.total) {
            this.changeGridData();
        }

        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        }

        if(changes.langs) {
            let data = (<any>Object).assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = (<any>Object).assign({}, this.defaultLangs, data);
        }
    }

    getViewedItemsCount(): number {
        let viewed = this.totalRowsView * this.currentPage;
        
        if(viewed > this.total) {
            viewed = this.total;
        }

        return viewed;
    }

    getTotalPages(): number {
        return Math.ceil(this.total / this.totalRowsView);
    }

    onChangePage(event: any): void {
        this.currentPage = event.page;
        this.changeGridData();
    }

    onChangeTotal(event: any): void {
        this.currentPage = 1;
        this.totalRowsView = event.value;
        this.changeGridData();
    }

    calculateFirstRow(): number {
        let firstItem: number;

        if(this.currentPage == 1) {
            firstItem = 0;
        } else {
            firstItem = (this.currentPage * this.totalRowsView) - this.totalRowsView;
        }

        return firstItem;
    }

    changeGridData(): void {
        this.firstItem = this.calculateFirstRow();
        this.viewedItemsCount = this.getViewedItemsCount();
        this.totalPages = this.getTotalPages();

        this.fireLazyLoadEvent();
    }

    createLazyLoadData(): LazyloadEvent {
        return {
            first: this.firstItem,
            total: this.total,
            rows: Number(this.totalRowsView),
            sortedField: this.sortedField,
            sortedOrder: this.sortedOrder,
            filters: this.filtersData,
            page: Number(this.currentPage)
        };
    }

    rowClickHandler(event: any, row: any): void {
        if(event.target.nodeName == 'TD') {
            this.rowClick.emit({row: row});

            if(this.settings.actionOnRowClick) {
                this.router.navigate(this.settings.actionOnRowClick);
            }
        }
    }

    rowSelectHandler(event: any, row: any): void {
        this.rowSelect.emit({row: row});
    }

    rowUnselectHandler(event: any, row: any): void {
        this.rowUnselect.emit({row: row});
    }
    
    getChecked() {
        return this.checkedItems;
    }

    rowCheckedHandler(event: any, row: any): void {
        if (!this.checkedItems) {
            this.checkedItems = [];
        }

        let index = this.checkedItems.indexOf(row.id);
        if(index > -1) {
            this.checkedItems.splice(index, 1);
        }

        if(event.checked) {
            this.rowSelectHandler(event, row);
        } else {
            this.rowUnselectHandler(event, row);
        }
    }
    
    rowCustomActionHandler(event: any, name: string, row: any): void {
        this.rowAction.emit({name: name, row: row});
    }

    selectAllHandler(event: any, popover: PopoverComponent): void {
        this.checkedItems = this.rows.map(row => row.id);
        this.closePopover(event, popover);
    }

    unselectAllHandler(event: any, popover: PopoverComponent): void {
        this.checkedItems = [];
        this.closePopover(event, popover);
    }

    removeSelectedHandler(event: any, popover: PopoverComponent): void {
        this.removeSelected.emit({ids: this.checkedItems, data: this.createLazyLoadData()});
        this.closePopover(event, popover);
    }

    removeHandler(event: any, row: any, popover: PopoverComponent): void {
        this.remove.emit({id: row.id, data: this.createLazyLoadData()});
        popover.show(event);
    }

    routeNavigate(event: any, route: RouteItem, row?: any): void {
        let parametrs: Array<any> = [];
        
        if (route.parametrs && row) {
            for (let param in route.parametrs) {
                let value = row[route.parametrs[param]];
                
                if(value == undefined) {
                    this.route.params.subscribe(function (params) {
                        parametrs.push(params[route.parametrs[param]]);
                    });
                } else {
                    parametrs.push(value);
                }
            }
        }
        
        this.router.navigate([route.route, ...parametrs]);
    }
    
    closePopover(event: any, popover: PopoverComponent) {
        popover.show(event);
    }

    buildFiltersObject(): any {
        let filtersObject: any = {};

        if(this.filters) {
            for(let filter in this.filters) {
                filtersObject[this.filters[filter].field] = {};
                filtersObject[this.filters[filter].field]['value'] = '';
                filtersObject[this.filters[filter].field]['equal'] = 'like';
            }
        }

        return filtersObject;
    }

    filterSubmitHandler(event: any): void {
        this.filtersData = event;

        this.fireLazyLoadEvent();

        this.filtersSubmited.emit({filtersData: this.filtersData});
    }

    resetFiltersHandler(event: any): void {
        this.sortedField = this.settings.defaultSortedField;
        this.sortedOrder = this.settings.defaultSortedOrder;
        this.filtersData = this.buildFiltersObject();
        this.totalRowsView = this.totalRowsViewOptions[0].value;
        this.currentPage = 1;
        this.checkedItems = [];

        this.changeGridData();

        this.filtersReseted.emit({filtersData: this.filtersData});
    }

    filterChangedHandler(event: any): void {
        this.filtersData = event;

        // this.fireLazyLoadEvent();
    }

    sortChangedHandler(event: any): void {
        this.sortedField = event.sortedField;
        this.sortedOrder = event.sortedOrder;

        this.fireLazyLoadEvent();

        this.sortSubmited.emit({sortedField: this.sortedField, sortedOrder: this.sortedOrder});
    }

    fireLazyLoadEvent(): void {
        this.startPreloader();

        if(this.settings.lazyload) {
            this.lazyLoad.emit(this.createLazyLoadData());
        }
    }

    startPreloader(): void {
        this.isPreloaded = true;
    }

    stopPreloader(): void {
        this.isPreloaded = false;
    }
}