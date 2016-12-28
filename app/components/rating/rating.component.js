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
var forms_1 = require('@angular/forms');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
exports.FOX_RATING_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = (function () {
    function RatingComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.name = '';
        this.rated = new core_1.EventEmitter();
        this.innerValue = 0;
        this.stars = [];
        this.selectedStars = [];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('rating');
        this.defaultLangs = overwriteService.getLangs('rating');
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        for (var i = 1; i < this.settings.starsCount + 1; i++) {
            this.stars.push(i);
        }
    };
    RatingComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    RatingComponent.prototype.rate = function (event, rate) {
        if (this.disabled) {
            return;
        }
        this.value = rate;
        this.hoveredStar = rate;
        this.rated.emit({ originalEvent: event, rate: rate });
    };
    RatingComponent.prototype.onHover = function (event, rate) {
        if (this.disabled) {
            return;
        }
        this.hoveredStar = rate;
    };
    RatingComponent.prototype.onRatingOut = function (event) {
        this.hoveredStar = this.value;
    };
    RatingComponent.prototype.calculateWidth = function (value) {
        return Math.round(value * 100) / this.settings.starsCount;
    };
    RatingComponent.prototype.detectLevelClass = function (value) {
        var index = Math.round(this.settings.levels.length / this.settings.starsCount * value);
        index = (index == 0) ? 1 : index;
        return this.settings.levels[index - 1];
    };
    Object.defineProperty(RatingComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    RatingComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.hoveredStar = value;
            this.innerValue = value;
        }
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RatingComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RatingComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RatingComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RatingComponent.prototype, "rated", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-rating',
            templateUrl: 'rating.component.html',
            styleUrls: ['rating.component.css'],
            providers: [exports.FOX_RATING_CONTROL_VALUE_ACCESSOR],
            host: {
                style: "\n            display: block;\n        "
            }
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map