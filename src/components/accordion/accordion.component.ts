import { Component, Input, EventEmitter, Output} from '@angular/core';

import { AccordionTabComponent } from './accordiontab.component';

@Component({
	selector: 'fox-accordion',
    template: `
        <div class="panel-group">
    		<ng-content></ng-content>
    	</div>
    `
})
export class AccordionComponent {
	public tabs: Array<AccordionTabComponent> = [];

	@Input() multiple: boolean;

	@Output() closed: EventEmitter<any> = new EventEmitter();
    @Output() opened: EventEmitter<any> = new EventEmitter();

    constructor() { }

	addTab(tab: AccordionTabComponent): void {
        this.tabs.push(tab);
    }   
}