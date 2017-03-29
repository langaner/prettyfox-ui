import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter 
} from '@angular/core';

import { FieldsetSettings } from './fieldset.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-fieldset',
    templateUrl: 'fieldset.component.html',
    styleUrls: ['fieldset.component.css']
})
export class FieldsetComponent implements OnInit, OnChanges {
    @Input() settings: FieldsetSettings;

    @Output() toggled: EventEmitter<any> = new EventEmitter();

    public isToggled: boolean;

    protected defaultSettings: FieldsetSettings;
    
    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('fieldset');
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

    toggle(event: any): void {
		this.isToggled = !this.isToggled;

        if(this.isToggled) {
            this.toggled.emit({originalEvent: event}); 
        }
	}
}