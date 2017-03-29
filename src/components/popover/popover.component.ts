import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

import { PopoverSettings } from './popover.model';
import { DomService } from '../../shared/services/dom.service';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({
    moduleId: module.id,
    selector: 'fox-popover',
    templateUrl: 'popover.component.html',
    styleUrls: ['popover.component.css'],
    host: {
        'style': 'display: inline-block;'
    }
})
export class PopoverComponent implements OnInit, OnChanges {
    @Input() settings: PopoverSettings;
    @Input() disabled: boolean;

    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    public dropped: boolean;
    
    protected templateId: any;
    protected top: string = '-9999';
    protected left: string = '-9999';
    protected defaultSettings: PopoverSettings;

    constructor(
        private el: ElementRef, 
        private positionService: DomService,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('popover');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.templateId = 'popover-' + Math.round(Math.random() * (999999 - 1) + 1);
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: MouseEvent, targetElement: HTMLElement): void {
        if (this.settings.dismissible == false) {
            return;
        }
        
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({originalEvent: event});
        }
    }

    show(event: any): void {
        event.preventDefault();
        if(this.disabled || this.dropped) {
            this.dropped = false;
            return;
        }
        
        this.dropped = !this.dropped;

        setTimeout(() => {
            this.calculatePosition();
            this.showed.emit({originalEvent: event});
        }, 0);
    }

    private calculatePosition(): void {
        let hostEl = this.el.nativeElement;
        let targetEl = document.getElementById(this.templateId);
        let placement = this.positionService.placement(hostEl, targetEl, this.settings.placement);
        
        this.left = placement.left;
        this.top = placement.top;
    }
}