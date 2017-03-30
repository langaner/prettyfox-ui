import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, forwardRef, HostListener, ViewChild 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

declare var tinycolor: any;

import { ColorpickerSettings, ColorpickerLangs } from './colorpicker.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-colorpicker',
    templateUrl: 'colorpicker.component.html',
    styleUrls: ['colorpicker.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorpickerComponent),
        multi: true
    }]
})
export class ColorpickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: ColorpickerSettings;
    @Input() langs: ColorpickerLangs;

    @Output() changed: EventEmitter<any> = new EventEmitter();
    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    @ViewChild("spectrum") spectrumCanvasEl: ElementRef; 
    @ViewChild("hue") hueCanvasEl: ElementRef; 
    @ViewChild("alpha") alphaCanvasEl: ElementRef;
    @ViewChild("spectrumMarker") spectrumMarker: ElementRef;  
    @ViewChild("alphaMarker") alphaMarker: ElementRef;  
    @ViewChild("hueMarker") hueMarker: ElementRef;  
    @ViewChild("colorLabel") colorLabel: ElementRef;  

    public dropped: boolean;
    public currentHexColor: any;

    protected currentColorResults: any;
    protected innerValue: any = '';
    protected spectrumContext: CanvasRenderingContext2D;
    protected hueContext: CanvasRenderingContext2D;
    protected alphaContext: CanvasRenderingContext2D;
    protected currentRgbColor: any;
    protected currentHue: any;
    protected innerColor: any;
    protected isMouseDown: boolean = false;
    protected offset = {
		x: 0,
		y: 0
	}
    protected hueCords = {
		x: 0,
		y: 0
	}
    protected spectrumCords = {
		x: 0,
		y: 0
	}
    protected alphaCords = {
		x: 0,
		y: 0
	}
    protected defaultSettings: ColorpickerSettings;
    protected defaultLangs: ColorpickerLangs;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private el: ElementRef, private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('colorpicker');
        this.defaultLangs = overwriteService.getLangs('colorpicker');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
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


    drawHueGradient(): void {
        this.hueCanvasEl.nativeElement.height = this.settings.hueHeight;
        this.hueCanvasEl.nativeElement.width = this.settings.hueWidth;
        
        var gradient = this.hueContext.createLinearGradient(90, 0.000, 90, this.settings.hueHeight);

        gradient.addColorStop(0.01,	 'rgba(255, 0, 0, 1.000)');
        gradient.addColorStop(0.167, 'rgba(255, 0, 255, 1.000)');
        gradient.addColorStop(0.333, 'rgba(0, 0, 255, 1.000)');
        gradient.addColorStop(0.500, 'rgba(0, 255, 255, 1.000)');
        gradient.addColorStop(0.666, 'rgba(0, 255, 0, 1.000)');
        gradient.addColorStop(0.828, 'rgba(255, 255, 0, 1.000)');
        gradient.addColorStop(0.999, 'rgba(255, 0, 0, 1.000)');

        this.hueContext.fillStyle = gradient;
        this.hueContext.fillRect( 0, 0, this.settings.hueWidth, this.settings.hueHeight);
    }

    drawAlphaGradient(): void {
        this.alphaCanvasEl.nativeElement.height = this.settings.alphaHeight;
        this.alphaCanvasEl.nativeElement.width = this.settings.alphaWidth;

        var gradient = this.alphaContext.createLinearGradient(90, 0.000, 90, this.settings.alphaHeight);

        gradient.addColorStop(0.01,	'rgba(' + this.currentRgbColor.r + ',' + this.currentRgbColor.g + ',' + this.currentRgbColor.b + ', 1.000)');
        gradient.addColorStop(0.99,	'rgba(' + this.currentRgbColor.r + ',' + this.currentRgbColor.g + ',' + this.currentRgbColor.b + ', 0.000)');

        // Fill with gradient
        this.alphaContext.fillStyle = gradient;
        this.alphaContext.fillRect(-1, -1, this.settings.alphaWidth+2, this.settings.alphaHeight+2);
    }

    drawSpectrumGradient(): void {
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
        this.spectrumContext.fillRect( 0, 0, this.settings.spectrumWidth, this.settings.spectrumHeight);

        // Fill with white
        this.spectrumContext.fillStyle = whiteGradient;
        this.spectrumContext.fillRect( -1, -1, this.settings.spectrumWidth+2, this.settings.spectrumHeight+2);

        // Fill with black
        this.spectrumContext.fillStyle = blackGradient;
        this.spectrumContext.fillRect( -1, -1, this.settings.spectrumWidth+2, this.settings.spectrumHeight+2);
    }

    draw(): void {
        this.drawHueGradient(); 
        this.drawAlphaGradient();
        this.drawSpectrumGradient();
    }

    show(event: any): void {
        if(this.disabled) {
            return;
        }

        this.dropped = !this.dropped;

        if(this.dropped) {
            setTimeout(() => {
                this.initGradient()
                this.draw();
            }, 0);
        }

        this.showed.emit({originalEvent: event});
    }
    
    set color(value: any) {
        let color = (value instanceof tinycolor) ? value : new tinycolor();

        this.innerColor = color;
        this.currentHue = color.toHsv().h;
        this.currentRgbColor = color.toRgb();
        this.currentHexColor = color.toHexString();

        this.currentColorResults = {
            'rgb': this.innerColor.toRgbString(),
            'hsv': this.innerColor.toHsvString(),
            'hex': this.innerColor.toHexString(),
        }

        this.value = this.innerColor;
    }

    get color(): any {
        return this.innerColor;
    }

    initGradient(): void {
        this.spectrumContext = this.spectrumCanvasEl.nativeElement.getContext("2d");
        this.hueContext = this.hueCanvasEl.nativeElement.getContext("2d");
        this.alphaContext = this.alphaCanvasEl.nativeElement.getContext("2d");
        
        if(this.color == undefined && this.value) {
            this.color = new tinycolor(this.value);
        } else if(this.color == undefined) {
            this.color = new tinycolor();
        }
    }

    getHueColorByPoint(x: number, y: number): string {
        let imageData = this.getImageData(this.hueContext, this.hueCanvasEl, x, y);
        let hsl = new tinycolor({r: imageData[0], g: imageData[1], b: imageData[2]});

        this.setMarkerCenter(this.hueMarker, y);

        return hsl.toHsl().h;
    }

    getSpectrumColorByPoint(x: number, y: number): any {
        let imageData = this.getImageData(this.spectrumContext, this.spectrumCanvasEl, x, y);

        this.setMarkerCenter(this.spectrumMarker, x, y);

        return new tinycolor({r: imageData[0], g: imageData[1], b: imageData[2] });
    }

    getAlphaColorByPoint(x: number, y: number): number {
        let imageData = this.getImageData(this.hueContext, this.hueCanvasEl, x, y);

        this.setMarkerCenter(this.alphaMarker, y);
        console.log(imageData[3] / 255);
        return imageData[4] / 255;
    }

    getImageData(context: CanvasRenderingContext2D, canvas: ElementRef, x: number, y: number): any {
        let newX = Math.max( 0, Math.min( x, canvas.nativeElement.width-1 ));
        let newY = Math.max( 0, Math.min( y, canvas.nativeElement.height-1 ));
        let imageData = context.getImageData(newX, newY, 1, 1).data;
        
        return imageData;
    }

    setMarkerCenter(marker: ElementRef, x: number, y?: number): void {
        let xOffset = -1 * marker.nativeElement.offsetWidth / 2;
        let yOffset = -1 * marker.nativeElement.offsetHeight / 2;
        let xAdjusted: number;
        let yFinalxFinal: number;
        let yAdjusted: number;
        let yFinal: number;
        let xFinal: number;

        if (y === undefined) {
            yAdjusted = x + yOffset;
            yFinal = Math.round(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height-1 + yOffset, yAdjusted), yOffset));
            xFinal = 0;
        } else {
            xAdjusted = x + xOffset;
            yAdjusted = y + yOffset;

            xFinal = Math.floor(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height + xOffset, xAdjusted), xOffset));
            yFinal = Math.floor(Math.max(Math.min(this.spectrumCanvasEl.nativeElement.height + yOffset, yAdjusted), yOffset));
        }

        marker.nativeElement.style.left = xFinal + 'px';
        marker.nativeElement.style.top = yFinal + 'px';
    }

    colorSet(event: any, color: string): void {
        this.color = new tinycolor(color);
    }

    colorSelect(event: any, type: string): void {
        let x: number;
        let y: number;
        let position: any;
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
                
                let alpha = this.getAlphaColorByPoint(this.alphaCords.x, this.alphaCords.y);

                this.color.setAlpha(alpha);
                break;
            case 'palette':
                this.color = new tinycolor(event.target.style.backgroundColor);
                this.currentHue = this.color.toHsl().h;
                break;
        }

        this.draw();
    }

    onCanvasMouseDown(event: any, type: string): void {
        let canvas: any;

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
    }

    toFormat(value: any, format?: string): any {
        let color: string;
        
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
    }

    onCanvasMouseUp(event: any): void {
        if(this.isMouseDown) {
            this.isMouseDown = false;
        }
    }

    onCanvasMouseMove(event: any, type: string): void {
        if(!this.isMouseDown) {
            return;
        }

        this.colorSelect(event, type);
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any) {
        this.color = new tinycolor( event.target.value);

        this.changed.emit({value: event.target.value});
    }

    get value(): any {
        return this.innerValue;
    };

    set value(value: any) {
        let color = (value instanceof tinycolor) ? value : new tinycolor();

        this.innerValue = this.toFormat(color);
    
        this.onChangeCallback(this.innerValue);
    }

    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
            this.color = new tinycolor(this.innerValue);
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}