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
var SliderevealComponent = (function () {
    function SliderevealComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.closed = new core_1.EventEmitter();
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.bodyClass = 'fox-slidereveal__open';
        this.defaultSettings = overwriteService.getSettings('slidereveal');
        this.defaultLangs = overwriteService.getLangs('slidereveal');
    }
    SliderevealComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.bodyEl = document.getElementsByTagName('body')[0];
        this.sliderEl = this.slider.nativeElement;
    };
    SliderevealComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    SliderevealComponent.prototype.ngAfterContentInit = function () {
        this.init();
        this.close();
    };
    SliderevealComponent.prototype.onClickOutside = function (event, targetElement) {
        if (this.settings.dismissible == false) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.close();
            this.outsideClick.emit({ originalEvent: event });
            this.closed.emit({ originalEvent: event });
        }
    };
    SliderevealComponent.prototype.toggle = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.dropped = !this.dropped;
        if (this.dropped) {
            this.open();
            this.showed.emit({ originalEvent: event });
        }
        else {
            this.close();
            this.closed.emit({ originalEvent: event });
        }
    };
    SliderevealComponent.prototype.close = function () {
        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.right = '-' + this.settings.size;
                if (this.settings.push) {
                    this.bodyEl.style.right = '0px';
                    this.bodyEl.style.left = '0px';
                }
                break;
            case 'left':
                this.sliderEl.style.left = '-' + this.settings.size;
                if (this.settings.push) {
                    this.bodyEl.style.left = '0px';
                    this.bodyEl.style.right = '0px';
                }
                break;
            case 'top':
                this.sliderEl.style.top = '-' + this.settings.size;
                if (this.settings.push) {
                    this.bodyEl.style.top = '0px';
                    this.bodyEl.style.bottom = '0px';
                }
                break;
            case 'bottom':
                this.sliderEl.style.bottom = '-' + this.settings.size;
                if (this.settings.push) {
                    this.bodyEl.style.bottom = '0px';
                    this.bodyEl.style.top = '0px';
                }
                break;
        }
    };
    SliderevealComponent.prototype.open = function () {
        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.right = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.right = this.settings.size;
                    this.bodyEl.style.left = '-' + this.settings.size;
                }
                break;
            case 'left':
                this.sliderEl.style.left = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.left = this.settings.size;
                    this.bodyEl.style.right = '-' + this.settings.size;
                }
                break;
            case 'top':
                this.sliderEl.style.top = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.top = this.settings.size;
                    this.bodyEl.style.bottom = '-' + this.settings.size;
                }
                break;
            case 'bottom':
                this.sliderEl.style.bottom = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.bottom = this.settings.size;
                    this.bodyEl.style.top = '-' + this.settings.size;
                }
                break;
        }
    };
    SliderevealComponent.prototype.init = function () {
        this.sliderEl.style.zIndex = this.settings.zindex,
            this.sliderEl.style.position = 'fixed',
            this.sliderEl.style.transitionDuration = this.settings.speed + 's',
            this.sliderEl.style.webkitTransitionDuration = this.settings.speed + 's',
            this.sliderEl.style.height = this.settings.size,
            this.sliderEl.style.transitionProperty = 'top, bottom, left, right';
        if (this.settings.push) {
            this.bodyEl.style.position = 'absolute';
            this.bodyEl.style.transitionDuration = this.settings.speed + 's';
            this.bodyEl.style.webkitTransitionDuration = this.settings.speed + 's';
            this.bodyEl.style.transitionProperty = 'top, bottom, left, right';
        }
        if (this.settings.container) {
            this.sliderEl.style.position = 'absolute';
        }
        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.width = this.settings.size;
                this.sliderEl.style.height = '100%';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.right = '0px';
                break;
            case 'left':
                this.sliderEl.style.width = this.settings.size;
                this.sliderEl.style.height = '100%';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.left = '0px';
                break;
            case 'top':
                this.sliderEl.style.height = this.settings.size;
                this.sliderEl.style.width = '100%';
                this.sliderEl.style.left = '0px';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.right = '0px';
                break;
            case 'bottom':
                this.sliderEl.style.height = this.settings.size;
                this.sliderEl.style.width = '100%';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.left = '0px';
                this.sliderEl.style.right = '0px';
                break;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SliderevealComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SliderevealComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SliderevealComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SliderevealComponent.prototype, "closed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SliderevealComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SliderevealComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.ViewChild('slider'), 
        __metadata('design:type', core_1.ElementRef)
    ], SliderevealComponent.prototype, "slider", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], SliderevealComponent.prototype, "onClickOutside", null);
    SliderevealComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-slidereveal',
            templateUrl: 'slidereveal.component.html',
            styleUrls: ['slidereveal.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], SliderevealComponent);
    return SliderevealComponent;
}());
exports.SliderevealComponent = SliderevealComponent;
//# sourceMappingURL=slidereveal.component.js.map