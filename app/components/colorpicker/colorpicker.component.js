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
exports.FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return ColorpickerComponent; }),
    multi: true
};
var ColorpickerComponent = (function () {
    function ColorpickerComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.name = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.innerValue = '';
        this.isMouseDown = false;
        this.offset = {
            x: 0,
            y: 0
        };
        this.hueCords = {
            x: 0,
            y: 0
        };
        this.spectrumCords = {
            x: 0,
            y: 0
        };
        this.alphaCords = {
            x: 0,
            y: 0
        };
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('colorpicker');
        this.defaultLangs = overwriteService.getLangs('colorpicker');
    }
    ColorpickerComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
    };
    ColorpickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    ColorpickerComponent.prototype.onClickOutside = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.clicked.emit({ originalEvent: event });
        }
    };
    ColorpickerComponent.prototype.drawHueGradient = function () {
        this.hueCanvasEl.nativeElement.height = this.settings.hueHeight;
        this.hueCanvasEl.nativeElement.width = this.settings.hueWidth;
        var gradient = this.hueContext.createLinearGradient(90, 0.000, 90, this.settings.hueHeight);
        gradient.addColorStop(0.01, 'rgba(255, 0, 0, 1.000)');
        gradient.addColorStop(0.167, 'rgba(255, 0, 255, 1.000)');
        gradient.addColorStop(0.333, 'rgba(0, 0, 255, 1.000)');
        gradient.addColorStop(0.500, 'rgba(0, 255, 255, 1.000)');
        gradient.addColorStop(0.666, 'rgba(0, 255, 0, 1.000)');
        gradient.addColorStop(0.828, 'rgba(255, 255, 0, 1.000)');
        gradient.addColorStop(0.999, 'rgba(255, 0, 0, 1.000)');
        this.hueContext.fillStyle = gradient;
        this.hueContext.fillRect(0, 0, this.settings.hueWidth, this.settings.hueHeight);
    };
    ColorpickerComponent.prototype.drawAlphaGradient = function () {
        this.alphaCanvasEl.nativeElement.height = this.settings.alphaHeight;
        this.alphaCanvasEl.nativeElement.width = this.settings.alphaWidth;
        var gradient = this.alphaContext.createLinearGradient(90, 0.000, 90, this.settings.alphaHeight);
        gradient.addColorStop(0.01, 'rgba(' + this.currentRgbColor.r + ',' + this.currentRgbColor.g + ',' + this.currentRgbColor.b + ', 1.000)');
        gradient.addColorStop(0.99, 'rgba(' + this.currentRgbColor.r + ',' + this.currentRgbColor.g + ',' + this.currentRgbColor.b + ', 0.000)');
        // Fill with gradient
        this.alphaContext.fillStyle = gradient;
        this.alphaContext.fillRect(-1, -1, this.settings.alphaWidth + 2, this.settings.alphaHeight + 2);
    };
    ColorpickerComponent.prototype.drawSpectrumGradient = function () {
        this.spectrumCanvasEl.nativeElement.height = this.settings.spectrumHeight;
        this.spectrumCanvasEl.nativeElement.width = this.settings.spectrumWidth;
        // this.spectrumContext.clearRect(0, 0, this.settings.spectrumWidth, this.settings.spectrumHeight);
        // White Gradient
        var whiteGradient = this.spectrumContext.createLinearGradient(0, 0, this.settings.spectrumWidth, 0);
        whiteGradient.addColorStop(0.01, 'rgba(255, 255, 255, 1.000)');
        whiteGradient.addColorStop(0.99, 'rgba(255, 255, 255, 0.000)');
        // Black Gradient
        var blackGradient = this.spectrumContext.createLinearGradient(0, 0, 0, this.settings.spectrumHeight);
        blackGradient.addColorStop(0.01, 'rgba(0, 0, 0, 0.000)');
        blackGradient.addColorStop(0.99, 'rgba(0, 0, 0, 1.000)');
        // Fill with solid
        this.spectrumContext.fillStyle = 'hsl(' + this.currentHue + ', 100%, 50%)';
        this.spectrumContext.fillRect(0, 0, this.settings.spectrumWidth, this.settings.spectrumHeight);
        // Fill with white
        this.spectrumContext.fillStyle = whiteGradient;
        this.spectrumContext.fillRect(-1, -1, this.settings.spectrumWidth + 2, this.settings.spectrumHeight + 2);
        // Fill with black
        this.spectrumContext.fillStyle = blackGradient;
        this.spectrumContext.fillRect(-1, -1, this.settings.spectrumWidth + 2, this.settings.spectrumHeight + 2);
    };
    ColorpickerComponent.prototype.draw = function () {
        this.drawHueGradient();
        this.drawAlphaGradient();
        this.drawSpectrumGradient();
    };
    ColorpickerComponent.prototype.show = function (event) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.dropped = !this.dropped;
        if (this.dropped) {
            setTimeout(function () {
                _this.initGradient();
                _this.draw();
            }, 0);
        }
        this.showed.emit({ originalEvent: event });
    };
    Object.defineProperty(ColorpickerComponent.prototype, "color", {
        get: function () {
            return this.innerColor;
        },
        set: function (value) {
            var color = (value instanceof tinycolor) ? value : new tinycolor();
            this.innerColor = color;
            this.currentHue = color.toHsv().h;
            this.currentRgbColor = color.toRgb();
            this.currentHexColor = color.toHexString();
            this.currentColorResults = {
                'rgb': this.innerColor.toRgbString(),
                'hsv': this.innerColor.toHsvString(),
                'hex': this.innerColor.toHexString(),
            };
            this.value = this.innerColor;
        },
        enumerable: true,
        configurable: true
    });
    ColorpickerComponent.prototype.initGradient = function () {
        this.spectrumContext = this.spectrumCanvasEl.nativeElement.getContext("2d");
        this.hueContext = this.hueCanvasEl.nativeElement.getContext("2d");
        this.alphaContext = this.alphaCanvasEl.nativeElement.getContext("2d");
        if (this.color == undefined && this.value) {
            this.color = new tinycolor(this.value);
        }
        else if (this.color == undefined) {
            this.color = new tinycolor();
        }
    };
    ColorpickerComponent.prototype.getHueColorByPoint = function (x, y) {
        var imageData = this.getImageData(this.hueContext, this.hueCanvasEl, x, y);
        var hsl = new tinycolor({ r: imageData[0], g: imageData[1], b: imageData[2] });
        this.setMarkerCenter(this.hueMarker, y);
        return hsl.toHsl().h;
    };
    ColorpickerComponent.prototype.getSpectrumColorByPoint = function (x, y) {
        var imageData = this.getImageData(this.spectrumContext, this.spectrumCanvasEl, x, y);
        this.setMarkerCenter(this.spectrumMarker, x, y);
        return new tinycolor({ r: imageData[0], g: imageData[1], b: imageData[2] });
    };
    ColorpickerComponent.prototype.getAlphaColorByPoint = function (x, y) {
        var imageData = this.getImageData(this.hueContext, this.hueCanvasEl, x, y);
        this.setMarkerCenter(this.alphaMarker, y);
        console.log(imageData[3] / 255);
        return imageData[4] / 255;
    };
    ColorpickerComponent.prototype.getImageData = function (context, canvas, x, y) {
        var newX = Math.max(0, Math.min(x, canvas.nativeElement.width - 1));
        var newY = Math.max(0, Math.min(y, canvas.nativeElement.height - 1));
        var imageData = context.getImageData(newX, newY, 1, 1).data;
        return imageData;
    };
    ColorpickerComponent.prototype.setMarkerCenter = function (marker, x, y) {
        var xOffset = -1 * marker.nativeElement.offsetWidth / 2;
        var yOffset = -1 * marker.nativeElement.offsetHeight / 2;
        var xAdjusted;
        var yFinalxFinal;
        var yAdjusted;
        var yFinal;
        var xFinal;
        if (y === undefined) {
            yAdjusted = x + yOffset;
            yFinal = Math.round(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height - 1 + yOffset, yAdjusted), yOffset));
            xFinal = 0;
        }
        else {
            xAdjusted = x + xOffset;
            yAdjusted = y + yOffset;
            xFinal = Math.floor(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height + xOffset, xAdjusted), xOffset));
            yFinal = Math.floor(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height + yOffset, yAdjusted), yOffset));
        }
        marker.nativeElement.style.left = xFinal + 'px';
        marker.nativeElement.style.top = yFinal + 'px';
    };
    ColorpickerComponent.prototype.colorSet = function (event, color) {
        this.color = new tinycolor(color);
    };
    ColorpickerComponent.prototype.colorSelect = function (event, type) {
        var x;
        var y;
        var position;
        // let marker;
        switch (type) {
            case 'hue':
                position = this.hueCanvasEl.nativeElement.getBoundingClientRect();
                this.hueCords.x = event.clientX - position.left;
                this.hueCords.y = event.clientY - position.top;
                this.color = this.getSpectrumColorByPoint(this.spectrumCords.x, this.spectrumCords.y);
                this.currentHue = this.getHueColorByPoint(this.hueCords.x, this.hueCords.y);
                break;
            case 'spectrum':
                position = this.spectrumCanvasEl.nativeElement.getBoundingClientRect();
                this.spectrumCords.x = event.clientX - position.left;
                this.spectrumCords.y = event.clientY - position.top;
                this.color = this.getSpectrumColorByPoint(this.spectrumCords.x, this.spectrumCords.y);
                break;
            case 'alpha':
                position = this.alphaCanvasEl.nativeElement.getBoundingClientRect();
                this.alphaCords.x = event.clientX - position.left;
                this.alphaCords.y = event.clientY - position.top;
                var alpha = this.getAlphaColorByPoint(this.alphaCords.x, this.alphaCords.y);
                this.color.setAlpha(alpha);
                break;
            case 'palette':
                this.color = new tinycolor(event.target.style.backgroundColor);
                this.currentHue = this.color.toHsl().h;
                break;
        }
        this.draw();
    };
    ColorpickerComponent.prototype.onCanvasMouseDown = function (event, type) {
        var canvas;
        this.isMouseDown = true;
        switch (type) {
            case 'hue':
                canvas = this.hueCanvasEl.nativeElement;
                break;
            case 'spectrum':
                canvas = this.spectrumCanvasEl.nativeElement;
                break;
            case 'alpha':
                canvas = this.alphaCanvasEl.nativeElement;
                break;
        }
        this.offset.x = canvas.getBoundingClientRect().left;
        this.offset.y = canvas.getBoundingClientRect().top;
    };
    ColorpickerComponent.prototype.toFormat = function (value, format) {
        var color;
        format = (format) ? format : this.settings.outputFormat;
        switch (format) {
            case 'rgb':
                color = value.toRgbString();
                break;
            case 'hex':
                color = value.toHexString();
                break;
            case 'hsv':
                color = value.toHsvString();
                break;
            default:
                color = value.toHexString();
                break;
        }
        return color;
    };
    ColorpickerComponent.prototype.onCanvasMouseUp = function (event) {
        if (this.isMouseDown) {
            this.isMouseDown = false;
        }
    };
    ColorpickerComponent.prototype.onCanvasMouseMove = function (event, type) {
        if (!this.isMouseDown) {
            return;
        }
        this.colorSelect(event, type);
    };
    ColorpickerComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    ColorpickerComponent.prototype.onChange = function (event) {
        this.changed.emit({ originalEvent: event, value: this.innerValue });
    };
    Object.defineProperty(ColorpickerComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            var color = (value instanceof tinycolor) ? value : new tinycolor();
            this.innerValue = this.toFormat(color);
            this.onChangeCallback(this.innerValue);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ColorpickerComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.color = new tinycolor(this.innerValue);
        }
    };
    ColorpickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ColorpickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ColorpickerComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ColorpickerComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColorpickerComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColorpickerComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorpickerComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorpickerComponent.prototype, "clicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorpickerComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorpickerComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.ViewChild("spectrum"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "spectrumCanvasEl", void 0);
    __decorate([
        core_1.ViewChild("hue"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "hueCanvasEl", void 0);
    __decorate([
        core_1.ViewChild("alpha"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "alphaCanvasEl", void 0);
    __decorate([
        core_1.ViewChild("spectrumMarker"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "spectrumMarker", void 0);
    __decorate([
        core_1.ViewChild("alphaMarker"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "alphaMarker", void 0);
    __decorate([
        core_1.ViewChild("hueMarker"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "hueMarker", void 0);
    __decorate([
        core_1.ViewChild("colorLabel"), 
        __metadata('design:type', core_1.ElementRef)
    ], ColorpickerComponent.prototype, "colorLabel", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], ColorpickerComponent.prototype, "onClickOutside", null);
    ColorpickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-colorpicker',
            templateUrl: 'colorpicker.component.html',
            styleUrls: ['colorpicker.component.css'],
            providers: [exports.FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], ColorpickerComponent);
    return ColorpickerComponent;
}());
exports.ColorpickerComponent = ColorpickerComponent;
//# sourceMappingURL=colorpicker.component.js.map