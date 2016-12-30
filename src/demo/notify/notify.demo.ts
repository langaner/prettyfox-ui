import { Component, OnInit } from '@angular/core';

import { NotifyItemSettings } from '../../components/notify/notify.model';
import { NotifyService } from '../../components/notify/notify.service';

@Component({
    moduleId: module.id,
    selector: 'notify-demo',
    templateUrl: 'notify.demo.html'
})
export class NotifyDemoComponent implements OnInit {
	public settings: NotifyItemSettings = {
        
    };

    constructor(private notifyService: NotifyService) { }

    ngOnInit() { }

    error(event: any) {
    	this.notifyService.error('Error!', 'Error notify content', {duration: 2000,closeble: true});
    }

	info(event: any) {
		this.notifyService.info('Info!', 'Info notify content', {duration: 5,closeble: false});
	}

	success(event: any) {
		this.notifyService.success('Success!', 'Success notify content', {duration: 50,closeble: true});
	}

	warning(event: any) {
		this.notifyService.warning('Warning', 'Warning notify content', {duration: 10,closeble: false});
	}

	message(event: any) {
		this.notifyService.message('Message', 'Message notify content', {duration: 5,closeble: true});
	}

	clear() {
		this.notifyService.removeAll();
	}
}