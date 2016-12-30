import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'highlight',
    template: `
        <pre><code foxHighlight language="{{ language }}"><ng-content></ng-content></code></pre>
    `
})
export class HighlightComponent implements OnInit {
    @Input() language: string = '';

    constructor() { }

    ngOnInit() { }
}