import { Injectable, EventEmitter } from '@angular/core';

import { NotifyItem, NotifyEvent, NotifyItemSettings } from './notify.model';

@Injectable()
export class NotifyService {
	private emitter: EventEmitter<NotifyEvent> = new EventEmitter<NotifyEvent>();

	constructor() { }

	create(notify: NotifyItem) {
		notify.id = Math.random().toString();
		this.emitter.next({
			command: 'create', notify: notify
		});

    	return notify;
	}

	getEmitter(): EventEmitter<NotifyEvent> {
		return this.emitter;
	}

	error(title: string, content: string, settings?: NotifyItemSettings): NotifyItem {
		return this.create({
			title: title, 
			content: content, 
			settings: settings,
			type: 'error'
		});
	}

	info(title: string, content: string, settings?: NotifyItemSettings): NotifyItem {
		return this.create({
			title: title, 
			content: content, 
			settings: settings, 
			type: 'info'
		});
	}

	success(title: string, content: string, settings?: NotifyItemSettings): NotifyItem {
		return this.create({
			title: title, 
			content: content, 
			settings: settings, 
			type: 'success'
		});
	}

	warning(title: string, content: string, settings?: NotifyItemSettings): NotifyItem {
		return this.create({
			title: title, 
			content: content, 
			settings: settings, 
			type: 'warning'
		});
	}

	message(title: string, content: string, settings?: NotifyItemSettings): NotifyItem {
		return this.create({
			title: title, 
			content: content, 
			settings: settings,
			type: 'message'
		});
	}

	remove(notifyId?: string): void {
		this.emitter.next({
			command: 'remove', 
			id: notifyId
		});
	}

	removeAll(): void {
		this.emitter.next({
			command: 'removeAll'
		});
	}
}