import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { PanelmenuItem, PanelmenuSettings } from './panelmenu.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-panelmenu',
    templateUrl: 'panelmenu.component.html',
    styleUrls: ['panelmenu.component.css']
})
export class PanelmenuComponent implements OnInit, OnChanges {
    @Input() model: PanelmenuItem;
    @Input() settings: PanelmenuSettings;
    @Input() disabled: boolean;

    protected defaultSettings: PanelmenuSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('panelmenu');
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
}