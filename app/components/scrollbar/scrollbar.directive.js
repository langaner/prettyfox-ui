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
var dom_service_1 = require('../../shared/services/dom.service');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var ScrollbarDirective = (function () {
    function ScrollbarDirective(el, renderer, positionService, overwriteService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.positionService = positionService;
        this.overwriteService = overwriteService;
        this.width = '100%';
        this.height = '100%';
        this.scrolling = new core_1.EventEmitter();
        this.mouseUp = new core_1.EventEmitter();
        this.mouseDown = new core_1.EventEmitter();
        this.ThumbListener = function (event) {
            var top = _this.top + event.pageY - _this.pageY;
            _this.renderer.setElementStyle(_this.thumb, 'top', top + "px");
            _this.scroll(0);
            _this.scrolling.emit({ originalEvent: event });
        };
        this.whellHandler = function (e) {
            var event = e || window.event;
            var delta = event.deltaY || event.detail || event.wheelDelta;
            if (event.wheelDelta) {
                delta = -event.wheelDelta / 120;
            }
            if (event.detail) {
                delta = event.detail / 3;
            }
            _this.scroll(delta);
            event.preventDefault();
        };
        this.defaultSettings = overwriteService.getSettings('scrollbar');
    }
    ScrollbarDirective.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.elNative = this.el.nativeElement;
        this.initElementStyle();
        this.wrapElement();
        this.initScrollbar();
        this.initEventListeners();
    };
    ScrollbarDirective.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    ScrollbarDirective.prototype.ngAfterContentChecked = function () {
        this.initThumbHeight();
    };
    ScrollbarDirective.prototype.initElementStyle = function () {
        this.renderer.setElementStyle(this.elNative, 'display', 'block');
        this.renderer.setElementStyle(this.elNative, 'overflow', 'hidden');
        this.renderer.setElementStyle(this.elNative, 'position', 'relative');
    };
    ScrollbarDirective.prototype.wrapElement = function () {
        var margin = parseInt(this.positionService.style(this.elNative, 'margin'));
        this.wrapper = document.createElement('div');
        this.renderer.setElementClass(this.wrapper, 'fox-scrollbar__wrapper', true);
        this.renderer.setElementStyle(this.wrapper, 'display', 'block');
        this.renderer.setElementStyle(this.wrapper, 'position', 'relative');
        this.renderer.setElementStyle(this.wrapper, 'overflow', 'hidden');
        this.renderer.setElementStyle(this.wrapper, 'width', this.width);
        this.renderer.setElementStyle(this.wrapper, 'height', this.height);
        this.renderer.setElementStyle(this.wrapper, 'margin', String(margin));
        this.elNative.parentNode.insertBefore(this.wrapper, this.elNative);
        this.wrapper.appendChild(this.elNative);
    };
    ScrollbarDirective.prototype.initScrollbar = function () {
        this.track = document.createElement('div');
        this.thumb = document.createElement('div');
        this.renderer.setElementStyle(this.track, 'display', 'block');
        this.renderer.setElementClass(this.track, 'fox-scrollbar__track', true);
        this.renderer.setElementClass(this.track, 'bg-' + this.settings.trackColor, true);
        this.renderer.setElementStyle(this.track, 'position', 'absolute');
        this.renderer.setElementStyle(this.track, 'top', '0');
        this.renderer.setElementStyle(this.track, this.settings.trackPosition, '0');
        this.renderer.setElementStyle(this.track, 'opacity', (this.settings.showOnEnter) ? '0' : this.settings.trackOpacity);
        this.renderer.setElementStyle(this.track, 'cursor', 'pointer');
        this.renderer.setElementStyle(this.track, 'z-index', '998');
        this.renderer.setElementStyle(this.track, 'border-radius', this.settings.trackRadius + "px");
        this.renderer.setElementStyle(this.track, 'margin', this.settings.trackMargin);
        this.renderer.setElementStyle(this.track, 'width', this.settings.trackWidth + "px");
        this.renderer.setElementStyle(this.track, 'height', '100%');
        this.renderer.setElementStyle(this.track, 'transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.renderer.setElementStyle(this.track, '-moz-transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.renderer.setElementStyle(this.track, '-webkit-transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.renderer.setElementStyle(this.thumb, 'display', 'block');
        this.renderer.setElementClass(this.thumb, 'fox-scrollbar__thumb', true);
        this.renderer.setElementClass(this.thumb, 'bg-' + this.settings.thumbColor, true);
        this.renderer.setElementStyle(this.thumb, 'position', 'absolute');
        this.renderer.setElementStyle(this.thumb, 'top', '0');
        this.renderer.setElementStyle(this.thumb, this.settings.trackPosition, '0');
        this.renderer.setElementStyle(this.thumb, 'opacity', (this.settings.showOnEnter) ? '0' : this.settings.thumbOpacity);
        this.renderer.setElementStyle(this.thumb, 'cursor', 'pointer');
        this.renderer.setElementStyle(this.thumb, 'z-index', '999');
        this.renderer.setElementStyle(this.thumb, 'border-radius', this.settings.thumbRadius + "px");
        this.renderer.setElementStyle(this.thumb, 'margin', this.settings.thumbMargin);
        this.renderer.setElementStyle(this.thumb, 'width', this.settings.thumbWidth + "px");
        this.renderer.setElementStyle(this.thumb, 'transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.renderer.setElementStyle(this.thumb, '-moz-transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.renderer.setElementStyle(this.thumb, '-webkit-transition', "opacity " + this.settings.showTimeout + "s ease-in-out");
        this.wrapper.appendChild(this.track);
        this.wrapper.appendChild(this.thumb);
    };
    ScrollbarDirective.prototype.initThumbHeight = function () {
        var wrapperOffset = this.positionService.offset(this.wrapper);
        var thumbHeight = Math.max((wrapperOffset.height / this.elNative.scrollHeight) * wrapperOffset.height, 20);
        var display = (thumbHeight >= wrapperOffset.height) ? 'none' : 'block';
        this.renderer.setElementStyle(this.thumb, 'height', thumbHeight + "px");
        this.renderer.setElementStyle(this.thumb, 'display', display);
    };
    ScrollbarDirective.prototype.initEventListeners = function () {
        var _this = this;
        this.body = document.getElementsByTagName('body')[0];
        this.renderer.listen(this.elNative, 'mousewheel', this.whellHandler);
        // Firefox fix
        this.renderer.listen(this.elNative, 'DOMMouseScroll', this.whellHandler);
        this.renderer.listen(this.wrapper, 'mouseenter', function (event) {
            if (_this.settings.showOnEnter) {
                _this.renderer.setElementStyle(_this.track, 'opacity', _this.settings.trackOpacity);
                _this.renderer.setElementStyle(_this.thumb, 'opacity', _this.settings.thumbOpacity);
            }
        });
        this.renderer.listen(this.wrapper, 'mouseleave', function (event) {
            if (_this.settings.showOnEnter && !_this.dragging) {
                _this.renderer.setElementStyle(_this.track, 'opacity', '0');
                _this.renderer.setElementStyle(_this.thumb, 'opacity', '0');
            }
        });
        this.renderer.listen(this.thumb, 'mousedown', function (event) {
            if (!_this.dragging) {
                _this.pageY = event.pageY;
                _this.top = parseFloat(getComputedStyle(_this.thumb).top);
            }
            _this.dragging = true;
            _this.body.addEventListener('mousemove', _this.ThumbListener, false);
            _this.mouseDown.emit({ originalEvent: event });
            event.preventDefault();
            event.stopPropagation();
        });
        this.renderer.listenGlobal('document', 'mouseup', function (event) {
            _this.body.removeEventListener('mousemove', _this.ThumbListener, false);
            _this.dragging = false;
            _this.mouseUp.emit({ originalEvent: event });
        });
    };
    ScrollbarDirective.prototype.scroll = function (deltaY) {
        var delta = deltaY;
        var thumbOffset = this.positionService.offset(this.thumb);
        var wrapperOffset = this.positionService.offset(this.wrapper);
        var maxTop = wrapperOffset.height - thumbOffset.height;
        var percentScroll;
        delta = parseInt(this.positionService.style(this.thumb, 'top')) + deltaY * (this.settings.whellStep / 10) / 100 * thumbOffset.height;
        delta = Math.min(Math.max(delta, 0), maxTop);
        delta = (deltaY > 0) ? Math.ceil(delta) : Math.floor(delta);
        this.renderer.setElementStyle(this.thumb, 'top', delta + "px");
        percentScroll = parseInt(this.positionService.style(this.thumb, 'top')) / (wrapperOffset.height - thumbOffset.height);
        delta = percentScroll * (this.elNative.scrollHeight - wrapperOffset.height);
        this.renderer.setElementStyle(this.elNative, 'top', -delta + "px");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ScrollbarDirective.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ScrollbarDirective.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ScrollbarDirective.prototype, "height", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollbarDirective.prototype, "scrolling", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollbarDirective.prototype, "mouseUp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ScrollbarDirective.prototype, "mouseDown", void 0);
    ScrollbarDirective = __decorate([
        core_1.Directive({
            selector: '[foxScrollbar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, dom_service_1.DomService, overwrite_service_1.OverwriteService])
    ], ScrollbarDirective);
    return ScrollbarDirective;
}());
exports.ScrollbarDirective = ScrollbarDirective;
//# sourceMappingURL=scrollbar.directive.js.map