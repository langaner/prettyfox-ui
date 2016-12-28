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
var forms_1 = require('@angular/forms');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var PaginationComponent = (function () {
    function PaginationComponent(el, model, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.selected = new core_1.EventEmitter();
        this.prevClicked = new core_1.EventEmitter();
        this.nextClicked = new core_1.EventEmitter();
        this.lastClicked = new core_1.EventEmitter();
        this.firstClicked = new core_1.EventEmitter();
        this.innerPage = 1;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('pagination');
        this.defaultLangs = overwriteService.getLangs('pagination');
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.model = model;
        model.valueAccessor = this;
    }
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (changes.total) {
            this.pages = this.getPages(this.page);
        }
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.innerPage = this.model.model;
    };
    PaginationComponent.prototype.getPages = function (current) {
        var pages = [];
        var startPage = 1;
        var endPage = this.total;
        var isMax = (this.settings.max !== 0) && (this.settings.max < this.total) ? true : false;
        if (isMax) {
            startPage = Math.max(current - Math.floor(this.settings.max / 2), 1);
            endPage = startPage + this.settings.max - 1;
            if (endPage > this.total) {
                endPage = this.total;
                startPage = endPage - this.settings.max + 1;
            }
        }
        for (var n = startPage; n <= endPage; n++) {
            var page = {
                number: n,
                text: n.toString(),
                active: (n === current)
            };
            pages.push(page);
        }
        if (isMax) {
            if (startPage > 1) {
                var prev = {
                    number: (startPage - 1),
                    text: this.settings.separator,
                    active: false
                };
                pages.unshift(prev);
            }
            if (endPage < this.total) {
                var next = {
                    number: (startPage + 1),
                    text: this.settings.separator,
                    active: false
                };
                pages.push(next);
            }
        }
        return pages;
    };
    PaginationComponent.prototype.select = function (event, page) {
        event.preventDefault();
        if (!this.disabled) {
            this.writeValue(page);
            this.model.viewToModelUpdate(this.page);
            this.selected.emit({ originalEvent: event, page: page });
        }
    };
    PaginationComponent.prototype.prevSelect = function (event, page) {
        this.select(event, page - 1);
        this.prevClicked.emit({ originalEvent: event, page: this.page });
    };
    PaginationComponent.prototype.nextSelect = function (event, page) {
        this.select(event, page + 1);
        this.nextClicked.emit({ originalEvent: event, page: this.page });
    };
    PaginationComponent.prototype.lastSelect = function (event) {
        this.select(event, this.total);
        this.lastClicked.emit({ originalEvent: event });
    };
    PaginationComponent.prototype.firstSelect = function (event) {
        this.select(event, 1);
        this.firstClicked.emit({ originalEvent: event });
    };
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return (this.innerPage == undefined) ? 1 : this.innerPage;
        },
        set: function (value) {
            this.innerPage = value > this.total ? this.total : (value || 1);
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    PaginationComponent.prototype.writeValue = function (value) {
        this.innerPage = value;
        this.pages = this.getPages(this.page);
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    PaginationComponent.prototype.hasPrev = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.hasNext = function () {
        return this.page === this.total;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PaginationComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "total", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "prevClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "nextClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "lastClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PaginationComponent.prototype, "firstClicked", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-pagination',
            templateUrl: 'pagination.component.html',
            styleUrls: ['pagination.component.css'],
            providers: [forms_1.NgModel]
        }),
        __param(1, core_1.Self()), 
        __metadata('design:paramtypes', [core_1.ElementRef, forms_1.NgModel, overwrite_service_1.OverwriteService])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map