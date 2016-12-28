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
var LocalizedComponent = (function () {
    function LocalizedComponent(el) {
        this.el = el;
        this.defaultSettings = {
            locales: ['en']
        };
    }
    LocalizedComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
    };
    LocalizedComponent.prototype.ngAfterViewInit = function () {
    };
    LocalizedComponent.prototype.ngAfterContentInit = function () {
        console.log(this.contents);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LocalizedComponent.prototype, "settings", void 0);
    __decorate([
        core_1.ContentChildren(core_1.TemplateRef), 
        __metadata('design:type', core_1.QueryList)
    ], LocalizedComponent.prototype, "contents", void 0);
    LocalizedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-localized',
            templateUrl: 'localized.component.html',
            styleUrls: ['localized.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LocalizedComponent);
    return LocalizedComponent;
}());
exports.LocalizedComponent = LocalizedComponent;
//# sourceMappingURL=localized.component.js.map