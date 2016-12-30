import { 
    Component, OnInit, OnChanges, AfterContentInit, Input, Output, EventEmitter, ElementRef, HostListener, ViewChild 
} from '@angular/core';

import { SliderevealSettings, SliderevealLangs } from './slidereveal.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-slidereveal',
    templateUrl: 'slidereveal.component.html',
    styleUrls: ['slidereveal.component.css']
})
export class SliderevealComponent implements OnInit, OnChanges, AfterContentInit {
    @Input() settings: SliderevealSettings;
    @Input() langs: SliderevealLangs;
    @Input() disabled: boolean;

    @Output() closed: EventEmitter<any> = new EventEmitter();
    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    @ViewChild('slider') slider: ElementRef;

    protected defaultSettings: SliderevealSettings;
    protected defaultLangs: SliderevealLangs;
    protected dropped: boolean;
    protected bodyEl: any;
    protected sliderEl: any;
    protected bodyClass: string = 'fox-slidereveal__open';

    constructor(private el: ElementRef, private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('slidereveal');
        this.defaultLangs = overwriteService.getLangs('slidereveal');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.bodyEl = document.getElementsByTagName('body')[0];
        this.sliderEl = this.slider.nativeElement;
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

    ngAfterContentInit() {
        this.init();
        this.close();
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (this.settings.dismissible == false) {
            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);
        
        if (!clickedInside) {
            this.dropped = false;
            this.close();
            this.outsideClick.emit({originalEvent: event});
            this.closed.emit({originalEvent: event});
        }
    }

    toggle(event: any): void {
        if(this.disabled) {
            event.preventDefault();
            return;
        }
        
        this.dropped = !this.dropped;

        if(this.dropped) {
            this.open();
            this.showed.emit({originalEvent: event});
        } else {
            this.close();
            this.closed.emit({originalEvent: event});
        }
    }

    close(): void {
        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.right = '-' + this.settings.size;

                if (this.settings.push) {
                    this.bodyEl.style.right = '0px';
                    this.bodyEl.style.left = '0px';
                }
                break;
            case 'left':
                this.sliderEl.style.left = '-' + this.settings.size;

                if (this.settings.push) {
                    this.bodyEl.style.left = '0px';
                    this.bodyEl.style.right = '0px';
                }
                break;
            case 'top':
                this.sliderEl.style.top = '-' + this.settings.size;

                if (this.settings.push) {
                    this.bodyEl.style.top = '0px';
                    this.bodyEl.style.bottom = '0px';
                }
                break;
            case 'bottom':
                this.sliderEl.style.bottom = '-' + this.settings.size;

                if (this.settings.push) {
                    this.bodyEl.style.bottom = '0px';
                    this.bodyEl.style.top = '0px';
                }
                break;
        }
    }

    open(): void {
        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.right = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.right = this.settings.size;
                    this.bodyEl.style.left = '-' + this.settings.size;
                }
                break;
            case 'left':
                this.sliderEl.style.left = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.left = this.settings.size;
                    this.bodyEl.style.right = '-' + this.settings.size;
                }
                break;
            case 'top':
                this.sliderEl.style.top = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.top = this.settings.size;
                    this.bodyEl.style.bottom = '-' + this.settings.size;
                }
                break;
            case 'bottom':
                this.sliderEl.style.bottom = "0px";
                if (this.settings.push) {
                    this.bodyEl.style.bottom = this.settings.size;
                    this.bodyEl.style.top = '-' + this.settings.size;
                }
                break;
        }
    }

    init(): void {
        this.sliderEl.style.zIndex = this.settings.zindex,
        this.sliderEl.style.position = 'fixed',
        this.sliderEl.style.transitionDuration = this.settings.speed + 's',
        this.sliderEl.style.webkitTransitionDuration = this.settings.speed + 's',
        this.sliderEl.style.height = this.settings.size,
        this.sliderEl.style.transitionProperty = 'top, bottom, left, right';

        if (this.settings.push) {
            this.bodyEl.style.position = 'absolute';
            this.bodyEl.style.transitionDuration = this.settings.speed + 's';
            this.bodyEl.style.webkitTransitionDuration = this.settings.speed + 's';
            this.bodyEl.style.transitionProperty = 'top, bottom, left, right';
        }

        if (this.settings.container) {
            this.sliderEl.style.position = 'absolute';
        }

        switch (this.settings.position) {
            case 'right':
                this.sliderEl.style.width = this.settings.size;
                this.sliderEl.style.height = '100%';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.right = '0px';
                break;
            case 'left':
                this.sliderEl.style.width = this.settings.size;
                this.sliderEl.style.height = '100%';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.left = '0px';
                break;
            case 'top':
                this.sliderEl.style.height = this.settings.size;
                this.sliderEl.style.width = '100%';
                this.sliderEl.style.left = '0px';
                this.sliderEl.style.top = '0px';
                this.sliderEl.style.right = '0px';
                break;
            case 'bottom':
                this.sliderEl.style.height = this.settings.size;
                this.sliderEl.style.width = '100%';
                this.sliderEl.style.bottom = '0px';
                this.sliderEl.style.left = '0px';
                this.sliderEl.style.right = '0px';
                break;
        }
    }
}