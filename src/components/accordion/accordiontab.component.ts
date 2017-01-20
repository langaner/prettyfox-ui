import { Component, Input, Output } from '@angular/core';

import { AccordionComponent } from './accordion.component';

@Component({
    moduleId: module.id,
	selector: 'fox-accordion-tab',
    templateUrl: 'accordiontab.component.html',
    styleUrls: ['accordiontab.component.css']
})
export class AccordionTabComponent {
    @Input() header: string;
    @Input() selected: boolean;
    @Input() disabled: boolean;

	constructor(private accordion: AccordionComponent) {
		this.accordion.addTab(this);
	}

	toggle(event: any): void {
		if(this.disabled) {
            event.preventDefault();
            return;
        }

        let index = this.findIndex();

        if(this.selected) {
            this.selected = !this.selected;
            this.accordion.closed.emit({index: index});
        } else {
            if(!this.accordion.multiple) {
                this.closeAllTabs();
            }

            this.selected = true;
            this.accordion.opened.emit({index: index});
        }

		event.stopPropagation();
	}

	private findIndex(): number {
        let index = -1;
        if(this.accordion) {
            for(var i = 0; i < this.accordion.tabs.length; i++) {
                if(this.accordion.tabs[i] == this) {
                    return i;
                }
            }
        }
    }

    closeAllTabs(): void {
    	for(var i = 0; i < this.accordion.tabs.length; i++) {
            this.accordion.tabs[i].selected = false;
        }
    }
}