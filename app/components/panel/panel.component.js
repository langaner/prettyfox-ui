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
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var PanelComponent = (function () {
    function PanelComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.defaultSettings = overwriteService.getSettings('panel');
    }
    PanelComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    PanelComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    PanelComponent.prototype.ngAfterViewInit = function () {
        if (this.panelHeader.nativeElement.innerHTML.trim() == '') {
            this.panelHeader.nativeElement.remove();
        }
        if (this.panelBody.nativeElement.innerHTML.trim() == '') {
            this.panelBody.nativeElement.remove();
        }
        if (this.panelFooter.nativeElement.innerHTML.trim() == '') {
            this.panelFooter.nativeElement.remove();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "settings", void 0);
    __decorate([
        core_1.ViewChild('panelHeader'), 
        __metadata('design:type', core_1.ElementRef)
    ], PanelComponent.prototype, "panelHeader", void 0);
    __decorate([
        core_1.ViewChild('panelBody'), 
        __metadata('design:type', core_1.ElementRef)
    ], PanelComponent.prototype, "panelBody", void 0);
    __decorate([
        core_1.ViewChild('panelFooter'), 
        __metadata('design:type', core_1.ElementRef)
    ], PanelComponent.prototype, "panelFooter", void 0);
    PanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-panel',
            templateUrl: 'panel.component.html',
            styleUrls: ['panel.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
//# sourceMappingURL=panel.component.js.map