import { Component, Input, OnChanges, QueryList, ContentChildren, AfterContentInit, EventEmitter, Output } from '@angular/core';
import { TabComponent } from './tab.component';

import { TabSettings } from './tab.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({
    moduleId: module.id,
	selector: 'fox-tab-set',
    templateUrl: 'tabset.component.html',
	styleUrls: ['tabset.component.css']
})
export class TabSetComponent implements OnChanges, AfterContentInit {
	@Input() settings: TabSettings;

    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() closed: EventEmitter<any> = new EventEmitter();

	@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

	protected defaultSettings: TabSettings;

	constructor(tabs: QueryList<TabComponent>, private overwriteService: OverwriteService) {
		this.tabs = tabs;
		this.defaultSettings = overwriteService.getSettings('tab');
	}

	ngAfterContentInit() {
		this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
		if(this.tabs && this.tabs.length) {
			setTimeout(() => {
                this.selectedTab(this.tabs.toArray()).active = true;
            }, 0);
		}
	}

	ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

	selectedTab(tabs: Array<TabComponent>): TabComponent {
		for(let i = 0; i < this.tabs.length; i++) {
            if(tabs[i].selected && !tabs[i].disabled) {
                return tabs[i];
            }
        }

        return tabs[0];
	}

	activeTab(event: any, tab: TabComponent): void {
		if(tab.disabled) {
			event.preventDefault();
            return;
        }

		this.tabs.toArray().forEach((t) => t.active = false);
		tab.active = true;

		this.selected.emit({tab: tab});
	}

	closeTab(event: any, tab: TabComponent): void {
		tab.closed = true;

		this.closed.emit({tab: tab});
	}
}