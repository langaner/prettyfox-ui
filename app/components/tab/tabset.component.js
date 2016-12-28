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
var tab_component_1 = require('./tab.component');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var TabSetComponent = (function () {
    function TabSetComponent(tabs, overwriteService) {
        this.overwriteService = overwriteService;
        this.actived = new core_1.EventEmitter();
        this.closed = new core_1.EventEmitter();
        this.tabs = tabs;
        this.defaultSettings = overwriteService.getSettings('tab');
    }
    TabSetComponent.prototype.ngAfterContentInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.selectedTab(this.tabs.toArray()).active = true;
    };
    TabSetComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    TabSetComponent.prototype.selectedTab = function (tabs) {
        for (var i = 0; i < this.tabs.length; i++) {
            if (tabs[i].selected && !tabs[i].disabled) {
                return tabs[i];
            }
        }
        return tabs[0];
    };
    TabSetComponent.prototype.activeTab = function (event, tab) {
        if (tab.disabled) {
            event.preventDefault();
            return;
        }
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        tab.active = true;
        this.actived.emit({ originalEvent: event, tab: tab });
    };
    TabSetComponent.prototype.closeTab = function (event, tab) {
        tab.closed = true;
        this.closed.emit({ originalEvent: event, tab: tab });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TabSetComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabSetComponent.prototype, "actived", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TabSetComponent.prototype, "closed", void 0);
    __decorate([
        core_1.ContentChildren(tab_component_1.TabComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TabSetComponent.prototype, "tabs", void 0);
    TabSetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-tab-set',
            templateUrl: 'tabset.component.html',
            styleUrls: ['tabset.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.QueryList, overwrite_service_1.OverwriteService])
    ], TabSetComponent);
    return TabSetComponent;
}());
exports.TabSetComponent = TabSetComponent;
//# sourceMappingURL=tabset.component.js.map