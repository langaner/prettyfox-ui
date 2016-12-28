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
exports.FOX_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SliderComponent; }),
    multi: true
};
var SliderComponent = (function () {
    function SliderComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.thumbPos = 0;
        this.thumbSecondPos = 0;
        this.range = [];
        this.isMouseDown = false;
        this.thumbWidth = 30;
        this.defaultSettings = overwriteService.getSettings('slider');
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.innerValue = this.createInnerValue();
    };
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    SliderComponent.prototype.ngAfterContentInit = function () {
        this.buildStepsRange();
    };
    SliderComponent.prototype.createInnerValue = function () {
        if (this.settings.multiple) {
            var position = {
                start: this.settings.min,
                end: this.settings.max
            };
            this.thumbSecondPos = position.end;
            this.thumbPos = position.start;
            return position;
        }
        else {
            return 0;
        }
    };
    SliderComponent.prototype.onDocumentMouseMove = function (event) {
        if (this.isMouseDown) {
            this.thumbMove(event);
        }
    };
    SliderComponent.prototype.onDocumentMouseUp = function (event) {
        if (this.isMouseDown) {
            this.isMouseDown = false;
        }
    };
    SliderComponent.prototype.thumbSelect = function (event, thumbType) {
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.isMouseDown = true;
        this.selectedThumbType = thumbType;
    };
    SliderComponent.prototype.thumbUnselect = function (event) {
        if (this.isMouseDown) {
            this.isMouseDown = false;
        }
    };
    SliderComponent.prototype.thumbMove = function (event) {
        if (!this.isMouseDown) {
            return;
        }
        var trackX = this.getElementCoords(this.track.nativeElement).x;
        this.currentX = event.clientX - trackX;
        this.currentY = event.clientY;
        var step = this.stepInRange();
        if (step !== undefined) {
            this.placeThumb(step);
        }
    };
    SliderComponent.prototype.moveToPosition = function (event) {
        this.selectedThumbType = 'start';
        this.isMouseDown = true;
        this.thumbMove(event);
        this.isMouseDown = false;
    };
    SliderComponent.prototype.placeThumb = function (step) {
        switch (this.selectedThumbType) {
            case 'start':
                if (this.range[step] < this.thumbSecondPos || !this.settings.multiple) {
                    this.thumbPos = this.range[step];
                    this.value = step;
                }
                break;
            case 'end':
                if (this.range[step] > this.thumbPos) {
                    this.thumbSecondPos = this.range[step];
                    this.value = step;
                }
                break;
        }
    };
    SliderComponent.prototype.stepInRange = function () {
        if (this.currentX <= (this.calculateStepLength() / 2)) {
            return 1;
        }
        for (var step in this.range) {
            if (this.currentX >= (this.range[step] - (this.calculateStepLength() / 2)) && this.currentX <= this.range[step]) {
                return Number(step);
            }
        }
        return undefined;
    };
    SliderComponent.prototype.calculateStepLength = function () {
        return this.track.nativeElement.clientWidth / (this.settings.max - 1);
    };
    SliderComponent.prototype.getElementCoords = function (element) {
        var position = element.getBoundingClientRect();
        var x = position.left;
        var y = position.top;
        return { 'x': x, 'y': y };
    };
    SliderComponent.prototype.buildStepsRange = function () {
        var stepsRange = this.calculateStepLength();
        for (var i = 1; i <= this.settings.max; i++) {
            this.range[i] = (stepsRange * i) - stepsRange - (this.thumbWidth / 2);
        }
    };
    SliderComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    SliderComponent.prototype.onChange = function (event) {
        this.changed.emit({ originalEvent: event, value: this.value });
    };
    Object.defineProperty(SliderComponent.prototype, "value", {
        get: function () {
            if (this.innerValue == undefined) {
                this.innerValue = this.createInnerValue();
            }
            return this.innerValue;
        },
        set: function (value) {
            if (this.settings.multiple) {
                switch (this.selectedThumbType) {
                    case 'start':
                        this.innerValue.start = value;
                        break;
                    case 'end':
                        this.innerValue.end = value;
                        break;
                }
            }
            else {
                this.innerValue = value;
            }
            this.onChangeCallback(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    SliderComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.innerValue = value;
            this.placeThumb(this.value);
        }
    };
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SliderComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SliderComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SliderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SliderComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SliderComponent.prototype, "clicked", void 0);
    __decorate([
        core_1.ViewChild('track'), 
        __metadata('design:type', core_1.ElementRef)
    ], SliderComponent.prototype, "track", void 0);
    __decorate([
        core_1.ViewChild('thumb'), 
        __metadata('design:type', core_1.ElementRef)
    ], SliderComponent.prototype, "thumb", void 0);
    __decorate([
        core_1.ViewChild('thumbSecond'), 
        __metadata('design:type', core_1.ElementRef)
    ], SliderComponent.prototype, "thumbSecond", void 0);
    __decorate([
        core_1.HostListener('document:mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SliderComponent.prototype, "onDocumentMouseMove", null);
    __decorate([
        core_1.HostListener('document:mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SliderComponent.prototype, "onDocumentMouseUp", null);
    SliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-slider',
            templateUrl: 'slider.component.html',
            styleUrls: ['slider.component.css'],
            providers: [exports.FOX_SLIDER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=slider.component.js.map