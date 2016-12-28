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
exports.FOX_TAG_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TagComponent; }),
    multi: true
};
exports.KEYS = {
    backspace: 8,
    comma: 188,
    enter: 13,
    space: 32
};
var TagComponent = (function () {
    function TagComponent(overwriteService) {
        this.overwriteService = overwriteService;
        this.name = '';
        this.tagAdd = new core_1.EventEmitter();
        this.tagRemoved = new core_1.EventEmitter();
        this.tagsList = [];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('tag');
        this.defaultLangs = overwriteService.getLangs('tag');
    }
    TagComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
    };
    TagComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    TagComponent.prototype.onPaste = function (event) {
        var data = this.clipboardData(event).trim();
        var tags = data.split(',');
        this.addTags(tags);
        this.reselectTag();
        this.clearInput();
    };
    TagComponent.prototype.clipboardData = function (event) {
        var clipboard = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        return clipboard.getData('text/plain');
    };
    TagComponent.prototype.onKeydown = function (event) {
        if (this.disabled) {
            return;
        }
        var key = event.keyCode;
        switch (key) {
            case exports.KEYS.backspace:
                this.handleBackspace();
                break;
            case exports.KEYS.enter:
                if (this.settings.addTagOnEnter) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case exports.KEYS.comma:
                if (this.settings.addTagOnComma) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case exports.KEYS.space:
                if (this.settings.addTagOnSpace) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
        }
    };
    TagComponent.prototype.onBlur = function (event) {
        if (this.disabled) {
            return;
        }
        if (this.settings.addTagOnBlur) {
            this.addTags([this.inputValue]);
        }
    };
    TagComponent.prototype.isTagUnique = function (tagString) {
        var tagExist = (this.tagsList && this.tagsList.filter(function (tag) { return tag.label === tagString; }).length) ? false : true;
        return this.settings.duplicates ? true : tagExist;
    };
    TagComponent.prototype.isTagValid = function (tagString) {
        if (tagString.length < this.settings.minTagLength || tagString == '') {
            return false;
        }
        return true;
    };
    TagComponent.prototype.addTags = function (tags) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var newTags = [];
        var validTags = tags.map(function (tag) { return tag.trim(); })
            .filter(function (tag) { return _this.isTagValid(tag); })
            .filter(function (tag) { return _this.isTagUnique(tag); });
        validTags.forEach(function (item) {
            newTags.push({
                'value': _this.maxTagsListKey() + 1,
                'label': item
            });
        });
        if (this.tagsList) {
            this.tagsList = this.tagsList.concat(newTags);
        }
        else {
            this.tagsList = newTags;
        }
        this.reselectTag();
        this.onChangeCallback(this.tagsList);
        this.tagAdd.emit(newTags);
        this.clearInput();
    };
    TagComponent.prototype.removeTag = function (tagIndex) {
        console.log(tagIndex);
        var tag = this.tagsList[tagIndex];
        this.tagsList.splice(tagIndex, 1);
        this.reselectTag();
        this.onChangeCallback(this.tagsList);
        this.tagRemoved.emit(tag);
    };
    TagComponent.prototype.clearInput = function () {
        this.tagsInput.nativeElement.value = '';
    };
    TagComponent.prototype.handleBackspace = function () {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!this.isBlank(this.selected)) {
                this.removeTag(this.selected);
            }
            else {
                this.selected = this.tagsList.length - 1;
            }
        }
    };
    TagComponent.prototype.reselectTag = function () {
        this.selected = null;
    };
    TagComponent.prototype.isBlank = function (obj) {
        return obj === undefined || obj === null;
    };
    TagComponent.prototype.maxTagsListKey = function () {
        var _this = this;
        if (!this.tagsList || this.tagsList.length == 0) {
            return 1;
        }
        var index = Object.keys(this.tagsList).reduce(function (a, b) { return _this.tagsList[a].value > _this.tagsList[b].value ? a : b; });
        return this.tagsList[index].value;
    };
    Object.defineProperty(TagComponent.prototype, "inputValue", {
        get: function () {
            return this.tagsInput.nativeElement.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagComponent.prototype, "value", {
        get: function () {
            return this.tagsList;
        },
        set: function (value) {
            this.tagsList = value;
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    TagComponent.prototype.writeValue = function (value) {
        if (value !== this.tagsList) {
            this.tagsList = value;
        }
    };
    TagComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    TagComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TagComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TagComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TagComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TagComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Output('tagAdd'), 
        __metadata('design:type', core_1.EventEmitter)
    ], TagComponent.prototype, "tagAdd", void 0);
    __decorate([
        core_1.Output('tagRemoved'), 
        __metadata('design:type', core_1.EventEmitter)
    ], TagComponent.prototype, "tagRemoved", void 0);
    __decorate([
        core_1.ViewChild('tagsInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], TagComponent.prototype, "tagsInput", void 0);
    TagComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-tag',
            templateUrl: 'tag.component.html',
            styleUrls: ['tag.component.css'],
            providers: [exports.FOX_TAG_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [overwrite_service_1.OverwriteService])
    ], TagComponent);
    return TagComponent;
}());
exports.TagComponent = TagComponent;
//# sourceMappingURL=tag.component.js.map