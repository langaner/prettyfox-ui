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
var DatagridFilterComponent = (function () {
    function DatagridFilterComponent() {
        this.filtering = new core_1.EventEmitter();
        this.filterSubmited = new core_1.EventEmitter();
    }
    DatagridFilterComponent.prototype.ngOnInit = function () { };
    DatagridFilterComponent.prototype.filterChanged = function (event) {
        this.filtering.emit(this.filtersData);
    };
    DatagridFilterComponent.prototype.filterHandler = function (event, popover) {
        popover.show(event);
        this.filterSubmited.emit(this.filtersData);
    };
    DatagridFilterComponent.prototype.createSelectItem = function (data) {
        var items = [];
        for (var item in data) {
            items.push({
                label: data[item].label,
                value: data[item].value
            });
        }
        return items;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridFilterComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridFilterComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridFilterComponent.prototype, "filters", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatagridFilterComponent.prototype, "filtersData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatagridFilterComponent.prototype, "useEqual", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatagridFilterComponent.prototype, "equalOptions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatagridFilterComponent.prototype, "booleanOptions", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridFilterComponent.prototype, "filtering", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatagridFilterComponent.prototype, "filterSubmited", void 0);
    DatagridFilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-datagrid-filter',
            templateUrl: 'datagrid-filter.component.html',
            styleUrls: ['datagrid-filter.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], DatagridFilterComponent);
    return DatagridFilterComponent;
}());
exports.DatagridFilterComponent = DatagridFilterComponent;
//# sourceMappingURL=datagrid-filter.component.js.map