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
exports.FOX_RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return RadioComponent; }),
    multi: true
};
var RadioComponent = (function () {
    function RadioComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.disabled = false;
        this.name = '';
        this.label = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('radio');
    }
    RadioComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    RadioComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    RadioComponent.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.clicked.emit({ originalEvent: event, value: this.currentValue });
    };
    RadioComponent.prototype.onChange = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.checked = true;
        this.onChangeCallback(this.currentValue);
        this.changed.emit({ originalEvent: event, value: this.currentValue });
    };
    RadioComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    Object.defineProperty(RadioComponent.prototype, "value", {
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
    RadioComponent.prototype.writeValue = function (value) {
        this.innerValue = value;
        var checked = (this.innerValue == this.currentValue);
        this.checked = checked;
    };
    RadioComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RadioComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RadioComponent.prototype, "currentValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RadioComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RadioComponent.prototype, "clicked", void 0);
    RadioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-radio',
            templateUrl: 'radio.component.html',
            styleUrls: ['radio.component.css'],
            providers: [exports.FOX_RADIO_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], RadioComponent);
    return RadioComponent;
}());
exports.RadioComponent = RadioComponent;
//# sourceMappingURL=radio.component.js.map