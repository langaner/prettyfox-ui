import { 
    Component, OnDestroy, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, forwardRef, HostListener 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import * as moment from 'moment';
import { DatepickerDate, DatepickerSettings, DatepickerLangs } from './datepicker.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-datepicker',
    templateUrl: 'datepicker.component.html',
    styleUrls: ['datepicker.component.css'],
    providers: [FOX_DATEPICKER_CONTROL_VALUE_ACCESSOR]
})
export class DatepickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: DatepickerSettings;
    @Input() langs: DatepickerLangs;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    protected innerValue: any;
    protected days: Array<DatepickerDate> = [];
    protected date: any = moment();
    protected dropped: boolean;
    protected datePattern = 'DD.MM.YYYY H:mm:ss';
    protected defaultSettings: DatepickerSettings;
    protected defaultLangs: DatepickerLangs;
    protected displayDate: string = null;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private el: ElementRef, private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('datepicker');
        this.defaultLangs = overwriteService.getLangs('datepicker');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        
        if(this.settings.multiple) {
            this.innerValue = [];
        } else {
            this.innerValue = '';
        }

        this.buildCalendar();
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 

        if(changes.langs) {
            let data = (<any>Object).assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = (<any>Object).assign({}, this.defaultLangs, data);
        } 
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({originalEvent: event});
        }
    }

    show(event: any): void {
        if(this.disabled) {
            event.preventDefault();
            return;
        }

        this.dropped = !this.dropped;

        this.showed.emit({originalEvent: event});
    }

    changeTime(event: any, type: string, action: any): void {
        event.preventDefault();
        
        if(action == 'input') {
            this.date.set(type, event.target.value);
        } else {
            if(action == 'add') {
                this.date.add(1, type)
            } else {
                this.date.subtract(1, type)
            }
        }

        let selectedDate = moment(this.date, this.datePattern);
        this.value = selectedDate;

        this.buildCalendar();
    }

    valueToMoment(values: any): any {
        let result: any;

        if(this.settings.multiple) {
            result = [];
        }

        if(this.settings.multiple) {
            for (let key in values) {
                result.push(moment(values[key], this.settings.format));
            }
        } else {
            result = moment(this.value, this.settings.format);
        }

        return result;
    }

    buildCalendar(): void {
        let date = moment(this.date);
        let month = date.month();
        let year = date.year();
        let hour = date.hour();
        let minute = date.minute();
        let second = date.second();
        let n: number = 1;
        let selectedDate: any;
        let firstWeekDay: number = date.date(2).day();

        selectedDate = this.valueToMoment(this.value);

        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }
        
        this.days = [];
        for (let i = n; i <= date.endOf('month').date(); i += 1) {
            let currentDate = moment(`${i}.${month + 1}.${year} ${hour}:${minute}:${second}`, this.datePattern);
            let today = (moment().isSame(currentDate, 'day') && moment().isSame(currentDate, 'month')) ? true : false;
            let selected: boolean;

            selected = this.isSameDate(currentDate, selectedDate);

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
            } else {
                this.days.push({ 
                    day: null,
                    month: null,
                    year: null,
                    hour: hour,
                    minute: minute,
                    second: second,
                    enabled:false,
                    today: false,
                    selected: false 
                });
            }
        }
    }

    isSameDate(currentDate: any, dates: any): boolean {
        let selected: boolean;

        if(this.settings.multiple) {
            for (let key in dates) {
                selected = (dates[key].isSame(currentDate, 'day')) ? true : false; 

                if(selected) {
                    break;
                }
            }
        } else {
            selected = (dates.isSame(currentDate, 'day')) ? true : false; 
        }
        
        return selected;
    }

    selectDate(event: any, day: number): void {
        event.preventDefault();

        if(false == this.settings.closeOnSelect || this.settings.multiple) {
            event.stopPropagation();
        }

        let date: DatepickerDate = this.days[day];
        let selectedDate = moment(`${date.day}.${date.month}.${date.year} ${date.hour}:${date.minute}:${date.second}`, this.datePattern);
        
        if(!this.setSelectedDate(selectedDate)) {
            return;
        }

        this.buildCalendar();
    }

    setSelectedDate(selected: any): boolean {
        let isSame = this.isSameDate(selected, this.valueToMoment(this.value));

        if(this.settings.multiple && isSame) {
            this.removeSelectedDate(selected);
        } else {
            if(this.isMaximumDatesSelected()) {
                return false;
            }

            this.value = selected;
        }

        return true;
    }

    removeSelectedDate(selected: any) {
        let index = this.value.indexOf(this.toFormat(selected));
            
        if (index > -1) {
            this.value.splice(index, 1);
        }
    }

    isMaximumDatesSelected(): boolean {
        if(this.settings.multiple && this.value.length >= this.settings.maxDateSelect) {
            return true;
        }

        return false;
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({originalEvent: event, value: this.innerValue});
    }

    prevMonth(): void {
        this.date = this.date.subtract(1, 'month');
        this.buildCalendar();
    }

    nextMonth(): void {
        this.date = this.date.add(1, 'month');
        this.buildCalendar();
    }

    prevYear(): void {
        this.date = this.date.subtract(1, 'year');
        this.buildCalendar();
    }

    nextYear(): void {
        this.date = this.date.add(1, 'year');
        this.buildCalendar();
    }

    toFormat(value: any, format?: string): any {
        let formatData = (format == undefined) ? this.settings.format : format;
        let date = (value instanceof moment) ? value : moment(value, formatData);
        
        return date.format(formatData);
    }

    dayBgColor(day: DatepickerDate): string {
        if(day.today) {
            return 'bg-' + this.settings.dateColors[0];
        }

        if(day.selected) {
            return 'bg-' + this.settings.dateColors[1];
        }

        return 'bg-default';
    }
    
    get value(): any {
        if(this.settings.multiple && this.innerValue == undefined) {
            this.innerValue = [];
        }

        return this.innerValue;
    };

    set value(value: any) {
        this.date = (value instanceof moment) ? value : moment(value, this.settings.format);

        if(this.settings.multiple) {
            this.innerValue = (this.innerValue == undefined || !Array.isArray(this.innerValue)) ? [] : this.innerValue;
            this.innerValue.push(this.toFormat(value));
        } else {
            this.innerValue = this.toFormat(value);
        }
        
        this.displayDate = this.toFormat(value, this.settings.displayFormat);
        
        this.onChangeCallback(this.innerValue);
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}