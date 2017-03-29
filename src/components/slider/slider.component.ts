import { 
    Component, OnInit, OnChanges, AfterContentInit, Input, Output, EventEmitter, ElementRef, forwardRef, ViewChild, HostListener 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { SliderSettings } from './slider.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_SLIDER_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
};

@Component({ 
    moduleId: module.id,
    selector: 'fox-slider',
    templateUrl: 'slider.component.html',
    styleUrls: ['slider.component.css'],
    providers: [FOX_SLIDER_CONTROL_VALUE_ACCESSOR]
})
export class SliderComponent implements OnInit, OnChanges, AfterContentInit, ControlValueAccessor {
    @Input() settings: SliderSettings;
    @Input() name: string;
    @Input() disabled: boolean;
    
    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    @ViewChild('track') track: ElementRef;
    @ViewChild('thumb') thumb: ElementRef;
    @ViewChild('thumbSecond') thumbSecond: ElementRef;

    public thumbPos: number = 0;

    protected innerValue: any;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected currentX: number;
    protected currentY: number;
    protected thumbSecondPos: number = 0;
    protected range: Array<number> = [];
    protected isMouseDown: boolean = false;
    protected thumbWidth: number = 30;
    protected defaultSettings: SliderSettings;
    protected selectedThumbType: 'start' | 'end';
    
    constructor(private el: ElementRef, private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('slider');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);

        this.innerValue = this.createInnerValue();
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    ngAfterContentInit() {
        this.buildStepsRange();
    }

    createInnerValue(): any {
        if(this.settings.multiple) {
            let position: any = {
                start: this.settings.min,
                end: this.settings.max
            };

            this.thumbSecondPos = position.end;
            this.thumbPos = position.start;

            return position;
        } else {
            return 0;
        }
    }
    
    @HostListener('document:mousemove', ['$event'])
    public onDocumentMouseMove(event: any): void {
        if(this.isMouseDown) {
            this.thumbMove(event);
        }
    }

    @HostListener('document:mouseup', ['$event'])
    public onDocumentMouseUp(event: any): void {
        if(this.isMouseDown) {
            this.isMouseDown = false;
        }
    }

    thumbSelect(event: any, thumbType: any): void {
        event.preventDefault();
        event.stopPropagation();
        
        if(this.disabled) {
           return; 
        }
        
        this.isMouseDown = true;
        this.selectedThumbType = thumbType;
    }

    thumbUnselect(event: any): void {
        if(this.isMouseDown) {
            this.isMouseDown = false;
        }
    }
    
    thumbMove(event: any): void {
        if(!this.isMouseDown) {
            return;
        }

        let trackX = this.getElementCoords(this.track.nativeElement).x;
        
        this.currentX = event.clientX - trackX;
        this.currentY = event.clientY;
        
        let step = this.stepInRange();

        if (step !== undefined) {
            this.placeThumb(step);
        }
    }

    moveToPosition(event: any) {
        this.selectedThumbType = 'start';
        this.isMouseDown = true;
        this.thumbMove(event);
        this.isMouseDown = false;
    }

    private placeThumb(step: number): void {
        switch (this.selectedThumbType) {
            case 'start':
                if(this.range[step] < this.thumbSecondPos || !this.settings.multiple) {
                    this.thumbPos = this.range[step];
                    this.value = step;
                }
                break;
            case 'end':
                if(this.range[step] > this.thumbPos) {
                    this.thumbSecondPos = this.range[step];
                    this.value = step;
                }
                break;
        } 
    }

    private stepInRange(): number {
        if(this.currentX <= (this.calculateStepLength() / 2)) {
            return 1;
        }

        for(let step in this.range) {
            if( this.currentX >= (this.range[step] - (this.calculateStepLength() / 2)) && this.currentX <= this.range[step]) {
                return Number(step);
            }
        }

        return undefined;
    }

    private calculateStepLength(): number {
        return this.track.nativeElement.clientWidth / (this.settings.max - 1);
    }

    private getElementCoords(element: any): any {
        let position = element.getBoundingClientRect();
        let x = position.left;
        let y = position.top;

        return {'x': x, 'y': y};
    }

    private buildStepsRange(): void {
        let stepsRange = this.calculateStepLength();
        
        for (let i = 1; i <= this.settings.max; i++) {
            this.range[i] = (stepsRange * i) - stepsRange - (this.thumbWidth / 2);
        }
    }
    
    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        this.changed.emit({value: this.value});
    }
    
    get value(): any {
        if (this.innerValue == undefined) {
            this.innerValue = this.createInnerValue();
        }

        return this.innerValue;
    };

    set value(value: any) {
        if(this.settings.multiple) {
            switch (this.selectedThumbType) {
                case 'start':
                    this.innerValue.start = value;
                    break;
                case 'end':
                    this.innerValue.end = value;
                    break;
            }
        } else {
            this.innerValue = value;
        }
        
        this.onChangeCallback(this.value);
    }

    writeValue(value: any) {
        if (value !== undefined) {
            this.innerValue = value;
            this.placeThumb(this.value);
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}