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
var DomService = (function () {
    function DomService() {
    }
    DomService.prototype.position = function (el) {
        var elOffset = this.offset(el);
        var position = { top: 0, left: 0 };
        var parentElOffset = this.parentOffsetEl(el);
        if (parentElOffset !== document) {
            position = this.offset(parentElOffset);
            position.top += parentElOffset.clientTop - parentElOffset.scrollTop;
            position.left += parentElOffset.clientLeft - parentElOffset.scrollLeft;
        }
        var boundingClientRect = el.getBoundingClientRect();
        return {
            width: boundingClientRect.width || el.offsetWidth,
            height: boundingClientRect.height || el.offsetHeight,
            top: elOffset.top - position.top,
            left: elOffset.left - position.left
        };
    };
    DomService.prototype.placement = function (hostEl, targetEl, place) {
        var left;
        var top;
        var targetTop = this.position(hostEl).top;
        var targetLeft = this.position(hostEl).left;
        switch (place) {
            case 'right':
                left = targetLeft + hostEl.offsetWidth;
                top = targetTop + (hostEl.offsetHeight - targetEl.offsetHeight) / 2;
                break;
            case 'left':
                left = targetLeft - targetEl.offsetWidth;
                top = targetTop + (hostEl.offsetHeight - targetEl.offsetHeight) / 2;
                break;
            case 'top':
                left = targetLeft + (hostEl.offsetWidth - targetEl.offsetWidth) / 2;
                top = targetTop - targetEl.offsetHeight;
                break;
            case 'bottom':
                left = targetLeft + (hostEl.offsetWidth - targetEl.offsetWidth) / 2;
                top = targetTop + hostEl.offsetHeight;
                break;
        }
        return { left: left, top: top };
    };
    DomService.prototype.offset = function (el) {
        var boundingClientRect = el.getBoundingClientRect();
        return {
            width: boundingClientRect.width || el.offsetWidth,
            height: boundingClientRect.height || el.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
        };
    };
    DomService.prototype.style = function (el, property) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el)[property];
        }
        return el.style[property];
    };
    DomService.prototype.isStatic = function (el) {
        return (this.style(el, 'position') || 'static') === 'static';
    };
    DomService.prototype.parentOffsetEl = function (el) {
        var offsetParent = el.offsetParent || document;
        while (offsetParent && offsetParent !== document && this.isStatic(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || document;
    };
    ;
    DomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DomService);
    return DomService;
}());
exports.DomService = DomService;
//# sourceMappingURL=dom.service.js.map