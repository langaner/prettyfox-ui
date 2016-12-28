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
var moment = require('moment');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
exports.FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatepickerComponent; }),
    multi: true
};
var DatepickerComponent = (function () {
    function DatepickerComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.name = '';
        this.changed = new core_1.EventEmitter();
        this.clicked = new core_1.EventEmitter();
        this.showed = new core_1.EventEmitter();
        this.outsideClick = new core_1.EventEmitter();
        this.innerValue = '';
        this.days = [];
        this.date = moment();
        this.datePattern = 'DD.MM.YYYY H:mm:ss';
        this.displayDate = null;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.defaultSettings = overwriteService.getSettings('datepicker');
        this.defaultLangs = overwriteService.getLangs('datepicker');
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
        if (this.innerValue == '') {
            this.value = moment();
            this.onChangeCallback(this.value);
        }
        this.buildCalendar();
    };
    DatepickerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    DatepickerComponent.prototype.onClickOutside = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({ originalEvent: event });
        }
    };
    DatepickerComponent.prototype.show = function (event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        this.dropped = !this.dropped;
        this.showed.emit({ originalEvent: event });
    };
    DatepickerComponent.prototype.changeTime = function (event, type, action) {
        event.preventDefault();
        if (action == 'input') {
            this.date.set(type, event.target.value);
        }
        else {
            if (action == 'add') {
                this.date.add(1, type);
            }
            else {
                this.date.subtract(1, type);
            }
        }
        var selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.buildCalendar = function () {
        var date = moment(this.date);
        var month = date.month();
        var year = date.year();
        var hour = date.hour();
        var minute = date.minute();
        var second = date.second();
        var n = 1;
        var selectedDate = moment(this.value, this.settings.format);
        var firstWeekDay = date.date(2).day();
        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }
        this.days = [];
        for (var i = n; i <= date.endOf('month').date(); i += 1) {
            var currentDate = moment(i + "." + (month + 1) + "." + year + " " + hour + ":" + minute + ":" + second, this.datePattern);
            var today = (moment().isSame(currentDate, 'day') && moment().isSame(currentDate, 'month')) ? true : false;
            var selected = (selectedDate.isSame(currentDate, 'day')) ? true : false;
            if (i > 0) {
                this.days.push({
                    day: i,
                    month: month + 1,
                    year: year,
                    hour: hour,
                    minute: minute,
                    second: second,
                    enabled: true,
                    today: today,
                    selected: selected
                });
            }
            else {
                this.days.push({
                    day: null,
                    month: null,
                    year: null,
                    hour: hour,
                    minute: minute,
                    second: second,
                    enabled: false,
                    today: false,
                    selected: false
                });
            }
        }
    };
    DatepickerComponent.prototype.selectDate = function (event, day) {
        event.preventDefault();
        if (false == this.settings.closeOnSelect) {
            event.stopPropagation();
        }
        var date = this.days[day];
        var selected = moment(date.day + "." + date.month + "." + date.year + " " + date.hour + ":" + date.minute + ":" + date.second, this.datePattern);
        this.value = selected;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    DatepickerComponent.prototype.onChange = function (event) {
        this.changed.emit({ originalEvent: event, value: this.innerValue });
    };
    DatepickerComponent.prototype.prevMonth = function () {
        this.date = this.date.subtract(1, 'month');
        var selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.nextMonth = function () {
        this.date = this.date.add(1, 'month');
        var selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.prevYear = function () {
        this.date = this.date.subtract(1, 'year');
        var selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.nextYear = function () {
        this.date = this.date.add(1, 'year');
        var selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;
        this.buildCalendar();
    };
    DatepickerComponent.prototype.toFormat = function (value, format) {
        var formatData = (format == undefined) ? this.settings.format : format;
        var date = (value instanceof moment) ? value : moment(value, formatData);
        return date.format(formatData);
    };
    Object.defineProperty(DatepickerComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            this.date = (value instanceof moment) ? value : moment(value, this.settings.format);
            this.innerValue = this.toFormat(value);
            this.displayDate = this.toFormat(value, this.settings.displayFormat);
            this.onChangeCallback(this.innerValue);
        },
        enumerable: true,
        configurable: true
    });
    ;
    DatepickerComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    DatepickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatepickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatepickerComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DatepickerComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatepickerComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatepickerComponent.prototype, "changed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatepickerComponent.prototype, "clicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatepickerComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DatepickerComponent.prototype, "outsideClick", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], DatepickerComponent.prototype, "onClickOutside", null);
    DatepickerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-datepicker',
            templateUrl: 'datepicker.component.html',
            styleUrls: ['datepicker.component.css'],
            providers: [exports.FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map