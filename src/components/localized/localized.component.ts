import { 
    Component, OnInit, AfterViewInit, AfterContentInit, Input, Output, ContentChildren, ViewChildren, QueryList, ElementRef, TemplateRef  
} from '@angular/core';

import { LocalizedSettings } from './localized.model'

@Component({ 
    moduleId: module.id,
    selector: 'fox-localized',
    templateUrl: 'localized.component.html',
    styleUrls: ['localized.component.css']
})
export class LocalizedComponent implements OnInit, AfterViewInit {
    @Input() settings: LocalizedSettings;

    @ContentChildren(TemplateRef) contents: QueryList<any>; 

    protected defaultSettings: LocalizedSettings = {
        locales: ['en']
    };

    constructor(private el:ElementRef) {
        
    }

    ngOnInit() {
        this.settings = (<any>Object).assign(this.defaultSettings, this.settings);
    }

    ngAfterViewInit() {
        
    }

    ngAfterContentInit() {
        console.log(this.contents);
    }
}