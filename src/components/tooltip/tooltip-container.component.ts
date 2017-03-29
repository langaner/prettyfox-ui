import { Component, AfterViewInit, OnInit, ElementRef, EventEmitter, Output, Input, Inject } from '@angular/core';
import { TooltipClass } from './tooltip.class';

import { DomService } from '../../shared/services/dom.service';

@Component({
    moduleId: module.id,
    selector: 'fox-tooltip-container',
    templateUrl: 'tooltip-container.component.html',
    styleUrls: ['tooltip-container.component.css']
})
export class TooltipContainerComponent implements OnInit, AfterViewInit {
    @Output() close: EventEmitter<any> = new EventEmitter();

    public top:string = '-9999';
    public left:string = '-9999';
    public settings: TooltipClass;

    constructor(
        private el: ElementRef,
        @Inject(TooltipClass) settings:TooltipClass,
        private positionService: DomService
    ){
        this.settings = settings;
    }
    
    ngOnInit() { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.calculatePosition();
        }, 0);
    }

    private calculatePosition(): void {
        let hostEl = this.settings.element.nativeElement;
        let targetEl = this.el.nativeElement.children[0];
        let placement = this.positionService.placement(hostEl, targetEl, this.settings.placement);
        
        this.left = placement.left;
        this.top = placement.top;
    }
}