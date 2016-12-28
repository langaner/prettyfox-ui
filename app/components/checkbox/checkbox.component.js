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
exports.FOX_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = (function () {
    function CheckboxComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.disabled = false;
        this.name = '';
        this.label = '';
        this.currentValue = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.checked = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('checkbox');
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    CheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    CheckboxComponent.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.checked = !this.checked;
        this.clicked.emit({ originalEvent: event, checked: event.target.checked });
    };
    CheckboxComponent.prototype.onChange = function (event) {
        this.updateValue();
        this.changed.emit({ originalEvent: event, checked: event.target.checked });
    };
    CheckboxComponent.prototype.updateValue = function () {
        if (false === this.settings.bool) {
            if (this.checked) {
                this.innerValue.push(this.currentValue);
            }
            else {
                var index = this.findIndex(this.currentValue);
                if (index >= 0) {
                    this.innerValue.splice(index, 1);
                }
            }
            this.onChangeCallback(this.innerValue);
        }
        else {
            this.onChangeCallback(this.checked);
        }
    };
    CheckboxComponent.prototype.isChecked = function () {
        if (false === this.settings.bool) {
            return this.findIndex(this.currentValue) !== undefined;
        }
        return this.innerValue;
    };
    CheckboxComponent.prototype.findIndex = function (value) {
        var index = -1;
        if (this.innerValue) {
            for (var i = 0; i < this.innerValue.length; i++) {
                if (this.innerValue[i] == value) {
                    return i;
                }
            }
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "value", {
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
    CheckboxComponent.prototype.writeValue = function (value) {
        this.innerValue = value;
        this.checked = this.isChecked();
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    CheckboxComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckboxComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CheckboxComponent.prototype, "currentValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CheckboxComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CheckboxComponent.prototype, "clicked", void 0);
    CheckboxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-checkbox',
            templateUrl: 'checkbox.component.html',
            styleUrls: ['checkbox.component.css'],
            providers: [exports.FOX_CHECKBOX_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], CheckboxComponent);
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
//# sourceMappingURL=checkbox.component.js.map