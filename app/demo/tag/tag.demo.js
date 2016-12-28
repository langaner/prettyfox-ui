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
var TagDemoComponent = (function () {
    function TagDemoComponent() {
        this.tags = [
            { value: 1, label: 'Tag 1' },
            { value: 2, label: 'Tag 2' },
            { value: 6, label: 'Tag 3' },
            { value: 4, label: 'Tag 4' },
            { value: 5, label: 'Tag 5' }
        ];
        this.settings = {};
        this.langs = {};
    }
    TagDemoComponent.prototype.ngOnInit = function () { };
    TagDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tag-demo',
            templateUrl: 'tag.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TagDemoComponent);
    return TagDemoComponent;
}());
exports.TagDemoComponent = TagDemoComponent;
//# sourceMappingURL=tag.demo.js.map