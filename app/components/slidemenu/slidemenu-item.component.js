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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var slidemenu_component_1 = require('./slidemenu.component');
var SlidemenuItemComponent = (function () {
    function SlidemenuItemComponent(slidemenu, router, el) {
        this.slidemenu = slidemenu;
        this.router = router;
        this.el = el;
    }
    SlidemenuItemComponent.prototype.ngOnInit = function () { };
    SlidemenuItemComponent.prototype.clickItem = function (event, child) {
        var _this = this;
        event.preventDefault();
        if (child.disabled) {
            return;
        }
        child.showed = true;
        if (this.hasChildrens(child)) {
            child.items.forEach(function (element) {
                element['showed'] = true;
            });
            this.slidemenu.curentItem = child;
            setTimeout(function () {
                _this.slidemenu.left -= _this.slidemenu.getWidth();
                if (_this.children.slideitemEl) {
                    console.log(_this.slidemenu.settings.actionsHeight);
                    _this.slidemenu.height = _this.children.slideitemEl.nativeElement.offsetHeight + _this.slidemenu.settings.actionsHeight;
                }
            }, 0);
        }
        if (child.route) {
            this.router.navigate([child.route]);
        }
    };
    SlidemenuItemComponent.prototype.hasChildrens = function (item) {
        return item.items != undefined && item.items.length > 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SlidemenuItemComponent.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SlidemenuItemComponent.prototype, "root", void 0);
    __decorate([
        core_1.ViewChild('slideitem'), 
        __metadata('design:type', core_1.ElementRef)
    ], SlidemenuItemComponent.prototype, "slideitemEl", void 0);
    __decorate([
        core_1.ViewChild('children'), 
        __metadata('design:type', Object)
    ], SlidemenuItemComponent.prototype, "children", void 0);
    SlidemenuItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-slidemenu-item',
            templateUrl: 'slidemenu-item.component.html',
            styleUrls: ['slidemenu-item.component.css']
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return slidemenu_component_1.SlidemenuComponent; }))), 
        __metadata('design:paramtypes', [slidemenu_component_1.SlidemenuComponent, router_1.Router, core_1.ElementRef])
    ], SlidemenuItemComponent);
    return SlidemenuItemComponent;
}());
exports.SlidemenuItemComponent = SlidemenuItemComponent;
//# sourceMappingURL=slidemenu-item.component.js.map