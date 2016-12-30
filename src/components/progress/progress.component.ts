import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ProgressSettings } from './progress.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-progress',
    templateUrl: 'progress.component.html',
    styleUrls: ['progress.component.css']
})
export class ProgressComponent implements OnInit, OnChanges {
    @Input() settings: ProgressSettings;
    @Input() value: number;

    protected defaultSettings: ProgressSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('progress');
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

    get persentValue(): number {
        return Math.round((this.value / this.settings.max) * 100);
    }
}