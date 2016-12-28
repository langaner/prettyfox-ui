import { 
    Component, AfterViewInit, OnInit, OnChanges, Input, Output, ViewChild, ElementRef   
} from '@angular/core';

import { PanelSettings } from './panel.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-panel',
    templateUrl: 'panel.component.html',
    styleUrls: ['panel.component.css']
})
export class PanelComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() settings: PanelSettings;

    @ViewChild('panelHeader') panelHeader: ElementRef;
    @ViewChild('panelBody') panelBody: ElementRef;
    @ViewChild('panelFooter') panelFooter: ElementRef;

    protected defaultSettings: PanelSettings;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('panel');
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

    ngAfterViewInit() {
        if(this.panelHeader.nativeElement.innerHTML.trim() == '') {
            this.panelHeader.nativeElement.remove()
        }

        if(this.panelBody.nativeElement.innerHTML.trim() == '') {
            this.panelBody.nativeElement.remove()
        }

        if(this.panelFooter.nativeElement.innerHTML.trim() == '') {
            this.panelFooter.nativeElement.remove()
        }
    }
}