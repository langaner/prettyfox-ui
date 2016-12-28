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
exports.FOX_SWITCHER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SwitcherComponent; }),
    multi: true
};
var SwitcherComponent = (function () {
    function SwitcherComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.name = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.innerValue = true;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('switcher');
        this.defaultLangs = overwriteService.getLangs('switcher');
    }
    SwitcherComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.toggle();
    };
    SwitcherComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    SwitcherComponent.prototype.onBlur = function (event) {
        this.onTouchedCallback();
    };
    SwitcherComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    SwitcherComponent.prototype.onChange = function (event) {
        this.changed.emit({ originalEvent: event });
    };
    SwitcherComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.value = (this.innerValue == this.settings.trueValue) ? this.settings.falseValue : this.settings.trueValue;
    };
    Object.defineProperty(SwitcherComponent.prototype, "value", {
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
    SwitcherComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    SwitcherComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SwitcherComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitcherComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitcherComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SwitcherComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SwitcherComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SwitcherComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SwitcherComponent.prototype, "clicked", void 0);
    SwitcherComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-switcher',
            templateUrl: 'switcher.component.html',
            styleUrls: ['switcher.component.css'],
            providers: [exports.FOX_SWITCHER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], SwitcherComponent);
    return SwitcherComponent;
}());
exports.SwitcherComponent = SwitcherComponent;
//# sourceMappingURL=switcher.component.js.map