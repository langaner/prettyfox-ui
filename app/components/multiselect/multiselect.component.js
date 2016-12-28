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
exports.FOX_MULTISELECT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MultiselectComponent; }),
    multi: true
};
var MultiselectComponent = (function () {
    function MultiselectComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.name = '';
        this.selected = new core_1.EventEmitter();
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.searchText = '';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultAjax = {
            model: '',
            route: '',
            query: '',
            searchFields: ['id', 'title'],
        };
        this.defaultSettings = overwriteService.getSettings('multiselect');
        this.defaultLangs = overwriteService.getLangs('multiselect');
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        this.ajax = Object.assign(this.defaultAjax, this.ajax);
        this.value = this.settings.single ? '' : [];
    };
    MultiselectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    MultiselectComponent.prototype.onClickOutside = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({ originalEvent: event });
        }
    };
    MultiselectComponent.prototype.clearSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.searchText = '';
    };
    MultiselectComponent.prototype.searchTyping = function (event) {
        if (!this.ajaxSearch || this.defaultAjax.model == '' || this.defaultAjax.query == '' || this.defaultAjax.route == '') {
            return;
        }
        /**
         * @toDo Build ajax query to server if turn on ajax mode.
         */
    };
    MultiselectComponent.prototype.buildName = function (values) {
        if (values == undefined || values.length === 0) {
            this.title = this.langs.defaultTitle;
        }
        else if (this.settings.single) {
            this.title = this.options
                .filter(function (option) { return values == option.value; })
                .map(function (option) { return option.label; })
                .join('');
        }
        else if (this.settings.titleMaxItems >= values.length) {
            this.title = this.options
                .filter(function (option) { return values && values.indexOf(option.value) > -1; })
                .map(function (option) { return option.label; })
                .join(', ');
        }
        else {
            this.title = this.langs.selectedItemsText + ': ' + values.length;
        }
    };
    MultiselectComponent.prototype.isSelected = function (option) {
        return this.innerValue && this.innerValue.indexOf(option.value) > -1;
    };
    MultiselectComponent.prototype.onSelect = function (event, option) {
        if (!this.innerValue) {
            this.innerValue = [];
        }
        if (this.settings.single == false) {
            var index = this.innerValue.indexOf(option.value);
            if (index > -1) {
                this.innerValue.splice(index, 1);
            }
        }
        else {
            this.innerValue = option.value;
        }
    };
    MultiselectComponent.prototype.changeInnerValue = function () {
        this.buildName(this.innerValue);
        this.onChangeCallback(this.innerValue);
        if (this.settings.closeOnSelect) {
            this.dropped = false;
        }
    };
    MultiselectComponent.prototype.toggle = function () {
        if (this.disabled) {
            return;
        }
        this.dropped = !this.dropped;
        this.showed.emit({ originalEvent: event });
    };
    MultiselectComponent.prototype.checkAll = function (event) {
        event.preventDefault();
        this.innerValue = this.options.map(function (option) { return option.value; });
        this.buildName(this.innerValue);
        this.onChangeCallback(this.innerValue);
    };
    MultiselectComponent.prototype.uncheckAll = function () {
        event.preventDefault();
        this.innerValue = [];
        this.buildName(this.innerValue);
        this.onChangeCallback(this.innerValue);
    };
    MultiselectComponent.prototype.onBlur = function (event) {
        this.onTouchedCallback();
    };
    Object.defineProperty(MultiselectComponent.prototype, "value", {
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
    MultiselectComponent.prototype.writeValue = function (value) {
        if (value != '' && value !== this.innerValue) {
            this.innerValue = value;
        }
        else {
            this.innerValue = this.settings.single ? '' : [];
        }
        this.buildName(this.innerValue);
    };
    MultiselectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MultiselectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MultiselectComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MultiselectComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MultiselectComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiselectComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiselectComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiselectComponent.prototype, "ajax", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MultiselectComponent.prototype, "ajaxSearch", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MultiselectComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MultiselectComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MultiselectComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], MultiselectComponent.prototype, "onClickOutside", null);
    MultiselectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-multiselect',
            templateUrl: 'multiselect.component.html',
            styleUrls: ['multiselect.component.css'],
            providers: [exports.FOX_MULTISELECT_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], MultiselectComponent);
    return MultiselectComponent;
}());
exports.MultiselectComponent = MultiselectComponent;
//# sourceMappingURL=multiselect.component.js.map