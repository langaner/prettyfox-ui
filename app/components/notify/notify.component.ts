import { 
    Component, OnDestroy, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef  
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NotifySettings, NotifyItem, NotifyEvent } from './notify.model';
import { NotifyService } from './notify.service';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-notify',
    templateUrl: 'notify.component.html',
    styleUrls: ['notify.component.css']
})
export class NotifyComponent implements OnInit, OnChanges, OnDestroy {
	@Input() settings: NotifySettings;

	@Output() created: EventEmitter<any> = new EventEmitter();
    @Output() deleted: EventEmitter<any> = new EventEmitter();

    public notifies: Array<NotifyItem> = [];

	private listener: Subscription;
	private latestNotify: NotifyItem;

	protected defaultSettings: NotifySettings;

    constructor(
        private el: ElementRef, 
        private notifyService: NotifyService,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('notify');
    }

    ngOnInit() {
    	this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);

    	this.listener = this.notifyService.getEmitter()
            .subscribe((item: NotifyEvent) => {
                switch (item.command) {
                    case 'removeAll':
                        this.removeAll();
                        break;
                    case 'remove':
                        this.removeOne(item.id);
                        break;
                    case 'create':
                        this.create(item.notify);
                        break;
                }
            });
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    create(item: NotifyItem): void {
    	item.createdAt = new Date();

    	this.latestNotify = item;

    	if (this.settings.addToBottom) {
            if (this.notifies.length >= this.settings.maxItems) {
            	this.notifies.splice(0, 1);
            }

            this.notifies.push(item);
        } else {
            if (this.notifies.length >= this.settings.maxItems) {
            	this.notifies.splice(this.notifies.length - 1, 1);
            }

            this.notifies.splice(0, 0, item);
        }
        
        this.created.emit({id: item.id});
	}

    removeAll(): void {
    	this.notifies = [];
    }

    removeOne(id: string): void {
        let indexOfDelete: number = 0;
        let doDelete: boolean = false;

        this.notifies.forEach((notify, index) => {
            if (notify.id === id) {
                this.notifies.splice(index, 1);
            }
        });

        this.deleted.emit({id: id});
    }

    getPositionClass(): string {
    	return this.settings.position.map(function(el) { 
            return 'fox-notify_position_' + el; 
        }).join(' ');
    }

    ngOnDestroy(): void {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    }
}