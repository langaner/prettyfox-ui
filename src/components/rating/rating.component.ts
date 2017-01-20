import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, forwardRef 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RatingSettings, RatingLangs } from './rating.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_RATING_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-rating',
    templateUrl: 'rating.component.html',
    styleUrls: ['rating.component.css'],
    providers: [FOX_RATING_CONTROL_VALUE_ACCESSOR],
    host: {
        style: `
            display: block;
        `
    }
})
export class RatingComponent implements ControlValueAccessor, OnInit {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: RatingSettings;
    @Input() langs: RatingLangs;

    @Output() rated: EventEmitter<any> = new EventEmitter();

    protected innerValue: number = 0;
    protected stars: Array<number> = [];
    protected selectedStars: Array<number> = [];
    protected hoveredStar: number;
    protected defaultSettings: RatingSettings;
    protected defaultLangs: RatingLangs;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('rating');
        this.defaultLangs = overwriteService.getLangs('rating');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);

        for (let i = 1; i < this.settings.starsCount + 1; i++) {
            this.stars.push(i);
        }
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

    rate(event: any, rate: number): void {
        if(this.disabled) {
            return;
        }

        this.value = rate;
        this.hoveredStar = rate;
        this.rated.emit({rate: rate})
    }

    onHover(event: any, rate: number): void {
        if(this.disabled) {
            return;
        }

        this.hoveredStar = rate;
    }

    onRatingOut(event: any): void {
        this.hoveredStar = this.value;
    }

    calculateWidth(value: number): number {
        return Math.round(value * 100) / this.settings.starsCount;
    }

    detectLevelClass(value: number): string {
        let index = Math.round(this.settings.levels.length / this.settings.starsCount * value);
        index = (index == 0) ? 1 : index;
        
        return this.settings.levels[index - 1];
    }

    get value(): number {
        return this.innerValue;
    };

    set value(value: number) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.onChangeCallback(value);
        }
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.hoveredStar = value;
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