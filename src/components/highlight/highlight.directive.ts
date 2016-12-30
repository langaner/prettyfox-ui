import { Directive, OnInit, Input, ElementRef } from '@angular/core';

declare var Prism: any;

@Directive({ 
    selector: '[foxHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() language: string = 'markup';

    constructor(private el: ElementRef) { }

    ngOnInit() {
        if(this.el.nativeElement.className) {
            this.el.nativeElement.className += ' language-' + this.language;
        } else {
            this.el.nativeElement.className = 'language-' + this.language;
        }
        
        Prism.highlightElement(this.el.nativeElement); 
    }
}    