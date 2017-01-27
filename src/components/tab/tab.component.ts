import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
	selector: 'fox-tab',
    templateUrl: 'tab.component.html',
    styleUrls: ['tab.component.css']
})
export class TabComponent {
    @Input() header: string;
    @Input() selected: boolean;
    @Input() disabled: boolean;
    @Input() closable: boolean;

    public active: boolean;
    public closed: boolean;
}