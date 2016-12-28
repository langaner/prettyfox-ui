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
var SlidemenuComponent = (function () {
    function SlidemenuComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.left = 0;
        this.defaultSettings = overwriteService.getSettings('slidemenu');
        this.defaultLangs = overwriteService.getLangs('slidemenu');
    }
    SlidemenuComponent.prototype.ngOnInit = function () {
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    SlidemenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    SlidemenuComponent.prototype.getWidth = function () {
        return this.slidemenuEl.nativeElement.offsetWidth;
    };
    SlidemenuComponent.prototype.goBack = function () {
        this.left += this.getWidth();
        if (this.curentItem) {
            this.curentItem['showed'] = false;
            this.curentItem.items.forEach(function (element) {
                element['showed'] = false;
            });
        }
        if (this.left != 0) {
            this.height = this.children.slideitemEl.nativeElement.offsetHeight + this.settings.actionsHeight;
        }
        else {
            this.height = this.children.slideitemEl.nativeElement.offsetHeight;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SlidemenuComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SlidemenuComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SlidemenuComponent.prototype, "langs", void 0);
    __decorate([
        core_1.ViewChild('slidemenu'), 
        __metadata('design:type', core_1.ElementRef)
    ], SlidemenuComponent.prototype, "slidemenuEl", void 0);
    __decorate([
        core_1.ViewChild('children'), 
        __metadata('design:type', Object)
    ], SlidemenuComponent.prototype, "children", void 0);
    SlidemenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-slidemenu',
            templateUrl: 'slidemenu.component.html',
            styleUrls: ['slidemenu.component.css']
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], SlidemenuComponent);
    return SlidemenuComponent;
}());
exports.SlidemenuComponent = SlidemenuComponent;
//# sourceMappingURL=slidemenu.component.js.map