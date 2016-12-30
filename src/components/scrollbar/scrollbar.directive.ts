import { 
    Directive, OnInit, OnChanges, AfterContentChecked, Input, Output, EventEmitter, ElementRef, Renderer   
} from '@angular/core';
import { ScrollbarSettings } from './scrollbar.model';
import { DomService } from '../../shared/services/dom.service';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Directive({
    selector: '[foxScrollbar]'
})
export class ScrollbarDirective implements OnInit, OnChanges, AfterContentChecked {
    @Input() settings: ScrollbarSettings;
    @Input() width: string = '100%';
    @Input() height: string = '100%';

    protected defaultSettings: ScrollbarSettings;
    protected wrapper: HTMLElement;
    protected track: HTMLElement;
    protected thumb: HTMLElement;
    protected elNative: HTMLElement;
    protected body: HTMLElement;
    protected pageY: number;
    protected top: number;
    protected dragging: boolean;

    @Output() scrolling: EventEmitter<any> = new EventEmitter();
    @Output() mouseUp: EventEmitter<any> = new EventEmitter();
    @Output() mouseDown: EventEmitter<any> = new EventEmitter();

    constructor(
        private el: ElementRef,
        private renderer: Renderer,
        private positionService: DomService,
        private overwriteService: OverwriteService
    ){
        this.defaultSettings = overwriteService.getSettings('scrollbar');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.elNative = this.el.nativeElement;

        this.initElementStyle();
        this.wrapElement();
        this.initScrollbar();
        this.initEventListeners();
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    ngAfterContentChecked() {
        this.initThumbHeight();
    }

    initElementStyle(): void {
        this.renderer.setElementStyle(this.elNative, 'display', 'block');
        this.renderer.setElementStyle(this.elNative, 'overflow', 'hidden');
        this.renderer.setElementStyle(this.elNative, 'position', 'relative');
    }

    wrapElement(): void {
        let margin = parseInt(this.positionService.style(this.elNative, 'margin'));

        this.wrapper = document.createElement('div');
        
        this.renderer.setElementClass(this.wrapper, 'fox-scrollbar__wrapper', true);
        this.renderer.setElementStyle(this.wrapper, 'display', 'block');
        this.renderer.setElementStyle(this.wrapper, 'position', 'relative');
        this.renderer.setElementStyle(this.wrapper, 'overflow', 'hidden');
        this.renderer.setElementStyle(this.wrapper, 'width', this.width);
        this.renderer.setElementStyle(this.wrapper, 'height', this.height);
        this.renderer.setElementStyle(this.wrapper, 'margin', String(margin));

        this.elNative.parentNode.insertBefore(this.wrapper, this.elNative);
        this.wrapper.appendChild(this.elNative);
    }

    initScrollbar(): void {
        this.track = document.createElement('div');
        this.thumb = document.createElement('div');

        this.renderer.setElementStyle(this.track, 'display', 'block');
        this.renderer.setElementClass(this.track, 'fox-scrollbar__track', true);
        this.renderer.setElementClass(this.track, 'bg-' + this.settings.trackColor, true);
        this.renderer.setElementStyle(this.track, 'position', 'absolute');
        this.renderer.setElementStyle(this.track, 'top', '0');
        this.renderer.setElementStyle(this.track, this.settings.trackPosition, '0');
        this.renderer.setElementStyle(this.track, 'opacity', (this.settings.showOnEnter) ? '0' : this.settings.trackOpacity);
        this.renderer.setElementStyle(this.track, 'cursor', 'pointer');
        this.renderer.setElementStyle(this.track, 'z-index', '998');
        this.renderer.setElementStyle(this.track, 'border-radius', `${this.settings.trackRadius}px`);
        this.renderer.setElementStyle(this.track, 'margin', this.settings.trackMargin);
        this.renderer.setElementStyle(this.track, 'width', `${this.settings.trackWidth}px`);
        this.renderer.setElementStyle(this.track, 'height', '100%');
        this.renderer.setElementStyle(this.track, 'transition', `opacity ${this.settings.showTimeout}s ease-in-out`);
        this.renderer.setElementStyle(this.track, '-moz-transition', `opacity ${this.settings.showTimeout}s ease-in-out`);
        this.renderer.setElementStyle(this.track, '-webkit-transition', `opacity ${this.settings.showTimeout}s ease-in-out`);

        this.renderer.setElementStyle(this.thumb, 'display', 'block');
        this.renderer.setElementClass(this.thumb, 'fox-scrollbar__thumb', true);
        this.renderer.setElementClass(this.thumb, 'bg-' + this.settings.thumbColor, true);
        this.renderer.setElementStyle(this.thumb, 'position', 'absolute');
        this.renderer.setElementStyle(this.thumb, 'top', '0');
        this.renderer.setElementStyle(this.thumb, this.settings.trackPosition, '0');
        this.renderer.setElementStyle(this.thumb, 'opacity', (this.settings.showOnEnter) ? '0' : this.settings.thumbOpacity);
        this.renderer.setElementStyle(this.thumb, 'cursor', 'pointer');
        this.renderer.setElementStyle(this.thumb, 'z-index', '999');
        this.renderer.setElementStyle(this.thumb, 'border-radius', `${this.settings.thumbRadius}px`);
        this.renderer.setElementStyle(this.thumb, 'margin', this.settings.thumbMargin);
        this.renderer.setElementStyle(this.thumb, 'width', `${this.settings.thumbWidth}px`);
        this.renderer.setElementStyle(this.thumb, 'transition', `opacity ${this.settings.showTimeout}s ease-in-out`);
        this.renderer.setElementStyle(this.thumb, '-moz-transition', `opacity ${this.settings.showTimeout}s ease-in-out`);
        this.renderer.setElementStyle(this.thumb, '-webkit-transition', `opacity ${this.settings.showTimeout}s ease-in-out`);

        this.wrapper.appendChild(this.track);
        this.wrapper.appendChild(this.thumb);
    }

    initThumbHeight(): void {
        let wrapperOffset = this.positionService.offset(this.wrapper);
        let thumbHeight = Math.max((wrapperOffset.height / this.elNative.scrollHeight) * wrapperOffset.height, 20);
        let display = (thumbHeight >= wrapperOffset.height) ? 'none' : 'block';
        
        this.renderer.setElementStyle(this.thumb, 'height', `${thumbHeight}px`);
        this.renderer.setElementStyle(this.thumb, 'display', display);
    }

    initEventListeners(): void {
        this.body = document.getElementsByTagName('body')[0];

        this.renderer.listen(this.elNative, 'mousewheel', this.whellHandler);
        // Firefox fix
        this.renderer.listen(this.elNative, 'DOMMouseScroll', this.whellHandler);

        this.renderer.listen(this.wrapper, 'mouseenter', (event: any) => {
            if(this.settings.showOnEnter) {
                this.renderer.setElementStyle(this.track, 'opacity', this.settings.trackOpacity);
                this.renderer.setElementStyle(this.thumb, 'opacity', this.settings.thumbOpacity);
            }
        });

        this.renderer.listen(this.wrapper, 'mouseleave', (event: any) => {
            if(this.settings.showOnEnter && !this.dragging) {
                this.renderer.setElementStyle(this.track, 'opacity', '0');
                this.renderer.setElementStyle(this.thumb, 'opacity', '0');
            }
        });

        this.renderer.listen(this.thumb, 'mousedown', (event: any) => {
            if (!this.dragging) {
                this.pageY = event.pageY;
                this.top = parseFloat(getComputedStyle(this.thumb).top);
            }

            this.dragging = true;
            this.body.addEventListener('mousemove', this.ThumbListener, false);

            this.mouseDown.emit({originalEvent: event});
            
            event.preventDefault();
            event.stopPropagation();
        });

        this.renderer.listenGlobal('document', 'mouseup', (event: any) => {
            this.body.removeEventListener('mousemove', this.ThumbListener, false);
            this.dragging = false;

            this.mouseUp.emit({originalEvent: event});
        });
    }

    scroll(deltaY: number): void {
        let delta = deltaY;
        let thumbOffset = this.positionService.offset(this.thumb);
        let wrapperOffset = this.positionService.offset(this.wrapper);
        let maxTop = wrapperOffset.height - thumbOffset.height;
        let percentScroll: number;
        
        delta = parseInt(this.positionService.style(this.thumb, 'top')) + deltaY * (this.settings.whellStep / 10) / 100 * thumbOffset.height;
        delta = Math.min(Math.max(delta, 0), maxTop);
        delta = (deltaY > 0) ? Math.ceil(delta) : Math.floor(delta);
        this.renderer.setElementStyle(this.thumb, 'top', `${delta}px`);
    

        percentScroll = parseInt(this.positionService.style(this.thumb, 'top')) / (wrapperOffset.height - thumbOffset.height);
        delta = percentScroll * (this.elNative.scrollHeight - wrapperOffset.height);
        
        this.renderer.setElementStyle(this.elNative, 'top', `${-delta}px`);
    }

    private ThumbListener = (event: any) => {
        let top = this.top + event.pageY - this.pageY;
        this.renderer.setElementStyle(this.thumb, 'top', `${top}px`);
        this.scroll(0);

        this.scrolling.emit({originalEvent: event});
    }

    private whellHandler = (e: any) => {
        let event = e || window.event;
        let delta = event.deltaY || event.detail || event.wheelDelta;

        if (event.wheelDelta) { 
            delta = -event.wheelDelta / 120; 
        }

        if (event.detail) { 
            delta = event.detail / 3; 
        }
        
        this.scroll(delta);

        event.preventDefault(); 
    }
}