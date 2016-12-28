import { 
    Component, AfterViewInit, OnInit, Input, Output, ViewChild, ElementRef, ReflectiveInjector, ViewContainerRef, ComponentFactoryResolver, ComponentRef    
} from '@angular/core';

import { VisualitySettings, VisualityLangs, DotItem, DotType } from './visuality.model'
import { DotClass } from './visuality-dot.class'
import { VisualityDotComponent } from './visuality-dot.component';

@Component({ 
    moduleId: module.id,
    selector: 'fox-visuality',
    templateUrl: 'visuality.component.html',
    styleUrls: ['visuality.component.css']
})
export class VisualityComponent implements OnInit, AfterViewInit {
    @Input() settings: VisualitySettings;
    @Input() langs: VisualityLangs;
    @Input() types: Array<DotType> = [];
    @Input() dots: Array<DotItem> = [];

    protected canvasId: string;
    protected canvasEl: ElementRef;
    protected canvasContext: any;
    protected dragging: boolean;
    protected mouseIsDown: boolean;
    protected currentMouseX: number;
    protected currentMouseY: number;

    protected defaultSettings: VisualitySettings = {
        height: 500
    };
    protected defaultLangs: VisualityLangs = {
        
    };
    protected defaultTypes: Array<DotType> = [
        {
            name: 'Round dot',
            alias: 'roundDot',
            component: ''
        }
    ];

    constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.settings = (<any>Object).assign(this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign(this.defaultLangs, this.langs);
        this.types = (<any>Object).assign(this.defaultTypes, this.types);

        this.canvasId = 'popover-' + Math.round(Math.random() * (999999 - 1) + 1);
    }

    ngAfterViewInit() {
        this.canvasEl = document.getElementById(this.canvasId);
        this.canvasInit(this.canvasEl);
        this.drawDots();
    }

    canvasInit(canvas: ElementRef) {
        this.canvasContext = canvas.getContext('2d');
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvasEl.offsetWidth, this.canvasEl.offsetHeight);
    }

    drawDots() {
        if(this.dots.length == 0) {
            return;
        }

        for (let index = 0; index < this.dots.length; index++) {
            let dot = this.dots[index];
            let ref = this.createDotClass(dot);
        }
    }

    createDotClass(dot: DotItem): ComponentRef<VisualityDotComponent> {
        let bindingOptions = new DotClass({
            dot: dot,
            canvas: this.canvasEl
        });
        
        let binding = ReflectiveInjector.resolve([
            {
                provide: DotClass, useValue: bindingOptions
            }
        ]);

        let childInjector = ReflectiveInjector.fromResolvedProviders(binding, this.viewContainerRef.parentInjector);
        console.log(VisualityDotComponent);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(VisualityDotComponent);
        console.log('2');
        return this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
    }

    onMouseDown(event: any) {
        // console.log(event);
    }

    onMouseUp(event: any) {
        // console.log(event);
    }

    onMouseMove(event: any) {
        // console.log(event);
    }
}
