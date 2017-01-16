import { 
    Component, OnDestroy, OnInit, Input, Output, EventEmitter    
} from '@angular/core';

import { NotifyItem, NotifyItemSettings } from './notify.model';
import { NotifyService } from './notify.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-notify-item',
    templateUrl: 'notify-item.component.html',
    styleUrls: ['notify-item.component.css']
})
export class NotifyItemComponent implements OnInit, OnDestroy {
	@Input() item: NotifyItem;
	@Input() settings: NotifyItemSettings;
	@Input() maxItems: number;
	@Input() closeble: boolean;
	@Input() duration: number;
	@Input() stopOnHover: boolean;
	@Input() index: number;

	@Output() created: EventEmitter<any> = new EventEmitter();
    @Output() deleted: EventEmitter<any> = new EventEmitter();

    private speed: number;
    private timer: any;

    constructor(private notifyService: NotifyService) { }

    ngOnInit() {
        if(this.item.settings == undefined) {
            this.settings = {
                duration: this.duration,
                closeble: this.closeble
            };
        } else {
            this.settings = {
                duration: (!this.item.settings.duration) ? this.duration : this.item.settings.duration,
                closeble: (!this.item.settings.closeble) ? this.closeble : this.item.settings.closeble
            };
        }

    	if (this.settings.duration !== 0) {
            this.startDuration();
        }
    }

    close(event: any, item: NotifyItem): void {
    	event.preventDefault();

    	this.notifyService.remove(item.id);
    }

    startDuration(): void {
        this.speed = this.settings.duration * 1000;
        this.timer = setTimeout(() => {
        	this.notifyService.remove(this.item.id);
        }, this.speed)
    }

    ngOnDestroy(): void {
        clearTimeout(this.timer);
    }
}