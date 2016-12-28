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
var ScrollbarDemoComponent = (function () {
    function ScrollbarDemoComponent() {
        this.text = '';
        this.settings = {};
    }
    ScrollbarDemoComponent.prototype.ngOnInit = function () {
        for (var index = 0; index < 10; index++) {
            this.text += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>';
        }
    };
    ScrollbarDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'scrollbar-demo',
            templateUrl: 'scrollbar.demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ScrollbarDemoComponent);
    return ScrollbarDemoComponent;
}());
exports.ScrollbarDemoComponent = ScrollbarDemoComponent;
//# sourceMappingURL=scrollbar.demo.js.map