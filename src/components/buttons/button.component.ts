import {
    Component, OnInit, OnChanges, Input, Output, ElementRef, EventEmitter 
} from '@angular/core';
import { Router } from '@angular/router';

import { ButtonsSettings } from './buttons.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.css']
})
export class ButtonComponent implements OnInit, OnChanges {
    @Input() settings: ButtonsSettings;
    @Input() disabled: boolean = false;
    
    @Output() clicked: EventEmitter<any> = new EventEmitter();

    protected defaultSettings: ButtonsSettings;
    
    constructor(
        private el: ElementRef, 
        private router: Router, 
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('buttons');
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

    get isOutline(): string {
        return (this.settings.outline) ? 'outline-' : '';
    }
    
    onClick(event: any): void {
        if(this.disabled) {
            event.preventDefault();
            return;
        }

        if(this.settings.url) {
            this.router.navigate([this.settings.url]);
        }

        this.clicked.emit({originalEvent: event});
    }

    private isRightPlacement(): boolean {
        return this.settings.iconPlacement == 'right';
    }

    private isLeftPlacement(): boolean {
        return this.settings.iconPlacement == 'left';
    }
}