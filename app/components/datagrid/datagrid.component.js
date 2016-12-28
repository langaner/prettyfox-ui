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
var router_1 = require('@angular/router');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var helper_service_1 = require('../../shared/services/helper.service');
var DatagridComponent = (function () {
    function DatagridComponent(router, overwriteService, helperService) {
        this.router = router;
        this.overwriteService = overwriteService;
        this.helperService = helperService;
        this.total = 0;
        this.lazyLoad = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.removeSelected = new core_1.EventEmitter();
        this.rowClick = new core_1.EventEmitter();
        this.rowSelect = new core_1.EventEmitter();
        this.rowUnselect = new core_1.EventEmitter();
        this.filtersReseted = new core_1.EventEmitter();
        this.filtersSubmited = new core_1.EventEmitter();
        this.sortSubmited = new core_1.EventEmitter();
        this.totalRowsViewOptions = [];
        this.paginationSettings = {
            max: 5
        };
        this.totalSettings = {
            required: true
        };
        this.currentPage = 1;
        this.firstItem = 0;
        this.viewedItemsCount = 0;
        this.totalPages = 1;
        this.checkedItems = [];
        this.filtersData = {};
        this.defaultSettings = overwriteService.getSettings('datagrid');
        this.defaultLangs = overwriteService.getLangs('datagrid');
    }
    DatagridComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.sortedField = this.settings.defaultSortedField;
        this.sortedOrder = this.settings.defaultSortedOrder;
        if (this.settings.totalViewList.length) {
            for (var value in this.settings.totalViewList) {
                var total = this.settings.totalViewList[value];
                if (this.total < total) {
                    continue;
                }
                this.totalRowsViewOptions.push({
                    label: this.langs.totalRowsView + ' ' + total,
                    value: total
                });
            }
        }
        this.totalRowsView = this.totalRowsViewOptions[0].value;
        this.fireLazyLoadEvent();
        this.viewedItemsCount = this.getViewedItemsCount();
        this.totalPages = this.getTotalPages();
        this.filtersData = this.buildFiltersObject();
    };
    DatagridComponent.prototype.ngOnChanges = function (changes) {
        if (changes.rows) {
            this.stopPreloader();
        }
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    DatagridComponent.prototype.getViewedItemsCount = function () {
        var viewed = this.totalRowsView * this.currentPage;
        if (viewed > this.total) {
            viewed = this.total;
        }
        return viewed;
    };
    DatagridComponent.prototype.getTotalPages = function () {
        return Math.ceil(this.total / this.totalRowsView);
    };
    DatagridComponent.prototype.onChangePage = function (event) {
        this.currentPage = event.page;
        this.changeGridData();
    };
    DatagridComponent.prototype.onChangeTotal = function (event) {
        this.currentPage = 1;
        this.totalRowsView = event.value;
        this.changeGridData();
    };
    DatagridComponent.prototype.calculateFirstRow = function () {
        var firstItem;
        if (this.currentPage == 1) {
            firstItem = 0;
        }
        else {
            firstItem = (this.currentPage * this.totalRowsView) - this.totalRowsView;
        }
        return firstItem;
    };
    DatagridComponent.prototype.changeGridData = function () {
        this.firstItem = this.calculateFirstRow();
        this.viewedItemsCount = this.getViewedItemsCount();
        this.totalPages = this.getTotalPages();
        this.fireLazyLoadEvent();
    };
    DatagridComponent.prototype.createLazyLoadData = function () {
        return {
            first: this.firstItem,
            rows: Number(this.totalRowsView),
            sortedField: this.sortedField,
            sortedOrder: this.sortedOrder,
            filters: this.filtersData,
            currentPage: Number(this.currentPage)
        };
    };
    DatagridComponent.prototype.rowClickHandler = function (event, row) {
        if (event.target.nodeName == 'TD') {
            this.rowClick.emit({ originalEvent: event, row: row });
            if (this.settings.actionOnRowClick) {
                this.router.navigate(this.settings.actionOnRowClick);
            }
        }
    };
    DatagridComponent.prototype.rowSelectHandler = function (event, row) {
        this.rowSelect.emit({ originalEvent: event, row: row });
    };
    DatagridComponent.prototype.rowUnselectHandler = function (event, row) {
        this.rowUnselect.emit({ originalEvent: event, row: row });
    };
    DatagridComponent.prototype.rowCheckedHandler = function (event, row) {
        if (event.checked) {
            this.rowSelectHandler(event, row);
        }
        else {
            this.rowUnselectHandler(event, row);
        }
    };
    DatagridComponent.prototype.getChecked = function () {
        return this.checkedItems;
    };
    DatagridComponent.prototype.onCheckedItem = function (event, row) {
        if (!this.checkedItems) {
            this.checkedItems = [];
        }
        var index = this.checkedItems.indexOf(row.id);
        if (index > -1) {
            this.checkedItems.splice(index, 1);
        }
    };
    DatagridComponent.prototype.selectAllHandler = function (event, popover) {
        this.checkedItems = this.rows.map(function (row) { return row.id; });
        this.closePopover(event, popover);
    };
    DatagridComponent.prototype.unselectAllHandler = function (event, popover) {
        this.checkedItems = [];
        this.closePopover(event, popover);
    };
    DatagridComponent.prototype.removeSelectedHandler = function (event, popover) {
        this.removeSelected.emit(this.checkedItems);
        this.closePopover(event, popover);
    };
    DatagridComponent.prototype.removeHandler = function (event, row, popover) {
        this.remove.emit(row.id);
        popover.show(event);
    };
    DatagridComponent.prototype.routeNavigate = function (event, route, row) {
        var parametrs = {};
        if (route.parametrs && row) {
            for (var param in route.parametrs) {
                parametrs[route.parametrs[param]] = row[route.parametrs[param]];
            }
        }
        this.router.navigate([route.route, parametrs]);
    };
    DatagridComponent.prototype.closePopover = function (event, popover) {
        popover.show(event);
    };
    DatagridComponent.prototype.buildFiltersObject = function () {
        var filtersObject = {};
        if (this.filters) {
            for (var filter in this.filters) {
                filtersObject[this.filters[filter].field] = [];
                filtersObject[this.filters[filter].field]['value'] = '';
                filtersObject[this.filters[filter].field]['equal'] = 'like';
            }
        }
        return filtersObject;
    };
    DatagridComponent.prototype.filterSubmitHandler = function (event) {
        this.filtersData = event;
        this.fireLazyLoadEvent();
        this.filtersSubmited.emit({ originalEvent: event, filtersData: this.filtersData });
    };
    DatagridComponent.prototype.resetFiltersHandler = function (event) {
        this.sortedField = this.settings.defaultSortedField;
        this.sortedOrder = this.settings.defaultSortedOrder;
        this.filtersData = this.buildFiltersObject();
        this.totalRowsView = this.totalRowsViewOptions[0].value;
        this.currentPage = 1;
        this.checkedItems = [];
        this.changeGridData();
        this.filtersReseted.emit({ originalEvent: event, filtersData: this.filtersData });
    };
    DatagridComponent.prototype.filterChangedHandler = function (event) {
        this.filtersData = event;
        this.fireLazyLoadEvent();
    };
    DatagridComponent.prototype.sortChangedHandler = function (event) {
        this.sortedField = event.sortedField;
        this.sortedOrder = event.sortedOrder;
        this.fireLazyLoadEvent();
        this.sortSubmited.emit({ originalEvent: event, sortedField: this.sortedField, sortedOrder: this.sortedOrder });
    };
    DatagridComponent.prototype.fireLazyLoadEvent = function () {
        this.startPreloader();
        if (this.settings.lazyload) {
            this.lazyLoad.emit(this.createLazyLoadData());
        }
    };
    DatagridComponent.prototype.startPreloader = function () {
        this.isPreloaded = true;
    };
    DatagridComponent.prototype.stopPreloader = function () {
        this.isPreloaded = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridComponent.prototype, "routes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatagridComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DatagridComponent.prototype, "total", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "lazyLoad", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "remove", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "removeSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "rowClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "rowSelect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "rowUnselect", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "filtersReseted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "filtersSubmited", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridComponent.prototype, "sortSubmited", void 0);
    DatagridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-datagrid',
            templateUrl: 'datagrid.component.html',
            styleUrls: ['datagrid.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [router_1.Router, overwrite_service_1.OverwriteService, helper_service_1.HelperService])
    ], DatagridComponent);
    return DatagridComponent;
}());
exports.DatagridComponent = DatagridComponent;
//# sourceMappingURL=datagrid.component.js.map