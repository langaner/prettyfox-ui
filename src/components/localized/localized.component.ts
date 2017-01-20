import { 
    Component, OnInit, AfterViewInit, AfterContentInit, Input, Output, ContentChild, ViewChild, QueryList, ElementRef, TemplateRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef  
} from '@angular/core';

import { LocalizedSettings } from './localized.model'
import { ValidateComponent } from '../validate/validate.component'

@Component({ 
    moduleId: module.id,
    selector: 'fox-localized',
    templateUrl: 'localized.component.html',
    styleUrls: ['localized.component.css']
})
export class LocalizedComponent implements OnInit, AfterViewInit {
    @Input() settings: LocalizedSettings;

    @ContentChild(ValidateComponent) validateComponent: ComponentRef<ValidateComponent>;

    @ContentChild(TemplateRef) template: TemplateRef<any>;

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

    protected defaultSettings: LocalizedSettings = {
        locales: ['en']
    };

    constructor(
        private el:ElementRef
    ) {
        
    }

    ngOnInit() {
        this.settings = (<any>Object).assign(this.defaultSettings, this.settings);  
    }

    ngAfterViewInit() {
        
    }

    ngAfterContentInit() {
        console.log(this.template);

        let view = this.dynamicComponentContainer.createEmbeddedView(this.template);

        console.log(view);
    }
}