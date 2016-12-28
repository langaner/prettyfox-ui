import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { AlertSettings } from './alert.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({
    moduleId: module.id,
    selector: 'fox-alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnChanges {
    @Input() settings: AlertSettings;

    @Output() closed: EventEmitter<any> = new EventEmitter();

    public isClosed: boolean;

    protected defaultSettings: AlertSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('alert');
    }
    
    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }
    
    onClose(event: any): void {
        this.isClosed = !this.isClosed;
        this.closed.emit({originalEvent: event});
    }
}