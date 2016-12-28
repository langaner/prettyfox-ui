import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo',
    template: `
        <div class="row content-header">
            <div class="content-header__title">
                {{ title }}
            </div>
            <div #demoDescription class="content-header__desc">
                <div id="demoDescriptionContent">
                    <ng-content select="[demo-description]"></ng-content>
                </div>
            </div>
        </div>
        <div class="content-body">
            <div #demoExamples class="content-body__section content-body__examples">
                <div class="row content-body__title">Examples</div>
                <div id="demoExamplesContent">
                    <ng-content select="[demo-examples]"></ng-content>
                </div>
            </div>
            <div class="content-body__section content-body__markup">
                <div class="row content-body__title">Markup</div>
                <fox-tab-set>
                    <fox-tab #demoMarkup header="Html" [selected]="true">
                        <ng-content select="[demo-markup]"></ng-content>
                    </fox-tab>
                    <fox-tab #demoTypescript header="TypeScript">
                        <ng-content select="[demo-typescript]"></ng-content>
                    </fox-tab>
                </fox-tab-set>
            </div>
            <div #demoUsage class="content-body__section content-body__usage">
                <div class="row content-body__title">Usage</div>
                <div id="demoUsageContent">
                    <ng-content select="[demo-usage]"></ng-content>
                </div>
            </div>
            <div #demoStyling class="content-body__section content-body__styling">
                <div class="row content-body__title">Styling</div>
                <div id="demoStylingContent">
                    <ng-content select="[demo-styling]"></ng-content>
                </div>
            </div>

            <div #demoInterfaces class="content-body__section content-body__interfaces">
                <div class="row content-body__title">Interfaces</div>
                <div id="demoInterfacesContent">
                    <ng-content select="[demo-interfaces]"></ng-content>
                </div>
            </div>
            <div #demoSettings class="content-body__section content-body__settings">
                <div class="row content-body__title">Settings</div>
                <div id="demoSettingsContent">
                    <ng-content select="[demo-settings]"></ng-content>
                </div>
            </div>
            <div #demoSettingsDefault class="content-body__section content-body__settings-default">
                <div class="row content-body__title">Settings default</div>
                <div id="demoSettingsDefaultContent">
                    <ng-content select="[demo-settings-default]"></ng-content>
                </div>
            </div>
            <div #demoEvents class="content-body__section content-body__events">
                <div class="row content-body__title">Events</div>
                <div id="demoEventsContent">
                    <ng-content select="[demo-events]"></ng-content>
                </div>
            </div>
        </div>
    `
})
export class DemoComponent implements OnInit, AfterViewInit {
    @Input() title: string = '';
    @Input() description: string = '';

    @ViewChild('demoDescription') demoDescription: ElementRef;
    @ViewChild('demoExamples') demoExamples: ElementRef;
    @ViewChild('demoUsage') demoUsage: ElementRef;
    @ViewChild('demoStyling') demoStyling: ElementRef;
    @ViewChild('demoInterfaces') demoInterfaces: ElementRef;
    @ViewChild('demoSettings') demoSettings: ElementRef;
    @ViewChild('demoSettingsDefault') demoSettingsDefault: ElementRef;
    @ViewChild('demoEvents') demoEvents: ElementRef;
    @ViewChild('demoMarkup') demoMarkup: ElementRef;
    @ViewChild('demoTypescript') demoTypescript: ElementRef;

    constructor(private el: ElementRef) { }

    ngOnInit() { }

    ngAfterViewInit() {
        if(document.getElementById('demoDescriptionContent').innerHTML.trim() == '') {
            this.demoDescription.nativeElement.remove()
        }
        if(document.getElementById('demoExamplesContent').innerHTML.trim() == '') {
            this.demoExamples.nativeElement.remove()
        }
        if(document.getElementById('demoUsageContent').innerHTML.trim() == '') {
            this.demoUsage.nativeElement.remove()
        }
        if(document.getElementById('demoStylingContent').innerHTML.trim() == '') {
            this.demoStyling.nativeElement.remove()
        }
        if(document.getElementById('demoInterfacesContent').innerHTML.trim() == '') {
            this.demoInterfaces.nativeElement.remove()
        }
        if(document.getElementById('demoSettingsContent').innerHTML.trim() == '') {
            this.demoSettings.nativeElement.remove()
        }
        if(document.getElementById('demoSettingsDefaultContent').innerHTML.trim() == '') {
            this.demoSettingsDefault.nativeElement.remove()
        }
        if(document.getElementById('demoEventsContent').innerHTML.trim() == '') {
            this.demoEvents.nativeElement.remove()
        }
    }
}