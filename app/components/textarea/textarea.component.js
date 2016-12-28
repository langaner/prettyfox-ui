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
exports.FOX_TEXTAREA_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TextareaComponent; }),
    multi: true
};
var TextareaComponent = (function () {
    function TextareaComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.name = '';
        this.placeholder = '';
        this.change = new core_1.EventEmitter();
        this.click = new core_1.EventEmitter();
        this.innerValue = '';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('textarea');
    }
    TextareaComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    TextareaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    TextareaComponent.prototype.onBlur = function (event) {
        this.onTouchedCallback();
    };
    TextareaComponent.prototype.onClick = function (event) {
        this.click.emit({ originalEvent: event });
    };
    TextareaComponent.prototype.onChange = function (event) {
        this.change.emit({ originalEvent: event, checked: event.target.checked });
    };
    Object.defineProperty(TextareaComponent.prototype, "value", {
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
    TextareaComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    TextareaComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TextareaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TextareaComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextareaComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextareaComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextareaComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TextareaComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TextareaComponent.prototype, "click", void 0);
    TextareaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-textarea',
            templateUrl: 'textarea.component.html',
            providers: [exports.FOX_TEXTAREA_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], TextareaComponent);
    return TextareaComponent;
}());
exports.TextareaComponent = TextareaComponent;
//# sourceMappingURL=textarea.component.js.map