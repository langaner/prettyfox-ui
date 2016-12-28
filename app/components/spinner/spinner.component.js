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
exports.FOX_SPINNER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SpinnerComponent; }),
    multi: true
};
var SpinnerComponent = (function () {
    function SpinnerComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.name = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.innerValue = 0;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('spinner');
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    SpinnerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    SpinnerComponent.prototype.onBlur = function (event) {
        this.onTouchedCallback();
    };
    SpinnerComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    SpinnerComponent.prototype.onChange = function (event) {
        this.changed.emit({ originalEvent: event, value: this.innerValue });
    };
    Object.defineProperty(SpinnerComponent.prototype, "value", {
        get: function () {
            if (this.innerValue == undefined) {
                this.innerValue = 0;
            }
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
    SpinnerComponent.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.innerValue = this.forceStep(value);
        }
    };
    SpinnerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SpinnerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    SpinnerComponent.prototype.forceStep = function (value) {
        switch (this.settings.forcestep) {
            case 'round':
                return Number((Math.round(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            case 'floor':
                return Number((Math.floor(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            case 'ceil':
                return Number((Math.ceil(value / this.settings.step) * this.settings.step).toFixed(this.settings.decimals));
            default:
                return value;
        }
    };
    SpinnerComponent.prototype.increment = function (event) {
        var value = this.forceStep(this.innerValue + this.settings.step);
        if ((value) <= this.settings.max) {
            this.value = value;
        }
        this.changed.emit({ originalEvent: event, value: value });
    };
    SpinnerComponent.prototype.decrement = function (event) {
        var value = this.forceStep(this.innerValue - this.settings.step);
        if ((value) >= this.settings.min) {
            this.value = value;
        }
        this.changed.emit({ originalEvent: event, value: value });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SpinnerComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SpinnerComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SpinnerComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SpinnerComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SpinnerComponent.prototype, "clicked", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-spinner',
            templateUrl: 'spinner.component.html',
            styleUrls: ['spinner.component.css'],
            providers: [exports.FOX_SPINNER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map