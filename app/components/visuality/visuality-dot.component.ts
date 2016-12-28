import { 
    Component, AfterViewInit, OnInit, Input, Output, ViewChild, ElementRef, Inject   
} from '@angular/core';

// import { DotItem } from './visuality.model';
import { DotClass } from './visuality-dot.class';

@Component({ 
    moduleId: module.id,
    selector: 'fox-visuality-dot',
    templateUrl: 'visuality-dot.component.html',
    styleUrls: ['visuality-dot.component.css']
})
export class VisualityDotComponent implements OnInit, AfterViewInit {
    protected dotId: string;
    protected dotEl: ElementRef;
    protected settings: TooltipClass;

    constructor(
        private el: ElementRef,
        @Inject(DotClass) settings: DotClass
    ){
        this.settings = settings;
    }

    ngOnInit() {
        console.log('!!!!!!!!!!!!!!!!');
        // this.dotId = 'dot-' + Math.round(Math.random() * (999999 - 1) + 1);
    }

    ngAfterViewInit() {
        // this.dotEl = document.getElementById(this.dotId);
    }
}
