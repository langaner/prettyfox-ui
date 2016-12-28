export interface DatepickerSettings {
    format?: string;
    displayFormat?: string;
    color?: string;
    size?: string;
    closeOnSelect?: boolean;
    showTime?: boolean;
}

export interface DatepickerDate {
    day: number;
    month: number;
    year: number;
    hour: number,
    minute: number,
    second: number,
    enabled: boolean;
    today: boolean;
    selected: boolean;
}

export interface DatepickerLangs {
    months?: Array<string>;
    days?: Array<string>;
    today?: string;
    selectedDate?: string;
    prevMonth?: string;
    nextMonth?: string;
    prevYear?: string;
    nextYear?: string;
    upTime?: string;
    downTime?: string;
    seconds?: string;
    minutes?: string;
    hours?: string;
}