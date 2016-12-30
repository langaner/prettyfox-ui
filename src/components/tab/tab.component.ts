import { Component, Input } from '@angular/core';

@Component({
	selector: 'fox-tab',
    template: `
        <div class="tab-pane fade fox-tab__item" [ngClass]="{'active in': active}" *ngIf="!closed">
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent {
    @Input() header: string;
    @Input() selected: boolean;
    @Input() disabled: boolean;
    @Input() closable: boolean;

    public active: boolean;
    public closed: boolean;
}