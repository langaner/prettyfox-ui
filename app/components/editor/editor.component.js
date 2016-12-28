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
var platform_browser_1 = require('@angular/platform-browser');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
exports.FOX_EDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = (function () {
    function EditorComponent(el, document, overwriteService) {
        this.el = el;
        this.document = document;
        this.overwriteService = overwriteService;
        this.name = '';
        this.innerValue = '';
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('editor');
        this.defaultLangs = overwriteService.getLangs('editor');
    }
    EditorComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
    };
    EditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    EditorComponent.prototype.command = function (cmd, arg) {
        this.document.execCommand(cmd, false, arg);
    };
    EditorComponent.prototype.execute = function (event, cmd, arg) {
        switch (cmd) {
            case 'pre':
                cmd = 'formatblock';
                arg = 'pre';
                break;
            case 'blockquote':
                cmd = 'formatblock';
                arg = 'blockquote';
                break;
        }
        this.command(cmd, arg);
    };
    EditorComponent.prototype.cmdState = function (cmd) {
        return document.queryCommandState(cmd);
    };
    EditorComponent.prototype.cmdValue = function (cmd) {
        return document.queryCommandValue(cmd);
    };
    EditorComponent.prototype.isElement = function (tag) {
        var selection = window.getSelection().getRangeAt(0);
        if (selection) {
            if (selection.startContainer.nodeName === tag.toUpperCase() ||
                selection.endContainer.nodeName === tag.toUpperCase()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    EditorComponent.prototype.setFontSize = function (event) {
        event.preventDefault();
        var value = event.target.value;
        var size = this.getKeyByValue(this.settings.fontSizes, value);
        if (value && size) {
            var spanString = '<span style="font-size:' + (size.size) + '">' + this.document.getSelection() + '<span/>';
            document.execCommand('insertHTML', false, spanString);
        }
    };
    EditorComponent.prototype.getKeyByValue = function (object, value) {
        var result = Object(object).filter(function (obj) {
            return obj.value == value;
        });
        return result.length ? result[0] : false;
    };
    EditorComponent.prototype.setValue = function (event) {
        this.value = event.target.innerHTML;
    };
    Object.defineProperty(EditorComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    EditorComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], EditorComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], EditorComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EditorComponent.prototype, "langs", void 0);
    __decorate([
        core_1.ViewChild('area'), 
        __metadata('design:type', core_1.ElementRef)
    ], EditorComponent.prototype, "area", void 0);
    __decorate([
        core_1.ViewChild('toolbar'), 
        __metadata('design:type', core_1.ElementRef)
    ], EditorComponent.prototype, "toolbar", void 0);
    EditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-editor',
            templateUrl: 'editor.component.html',
            styleUrls: ['editor.component.css'],
            providers: [exports.FOX_EDITOR_CONTROL_VALUE_ACCESSOR]
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object, overwrite_service_1.OverwriteService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map