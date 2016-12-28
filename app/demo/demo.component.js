"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DemoComponent = (function () {
    function DemoComponent(el) {
        this.el = el;
        this.title = '';
        this.description = '';
    }
    DemoComponent.prototype.ngOnInit = function () { };
    DemoComponent.prototype.ngAfterViewInit = function () {
        if (document.getElementById('demoDescriptionContent').innerHTML.trim() == '') {
            this.demoDescription.nativeElement.remove();
        }
        if (document.getElementById('demoExamplesContent').innerHTML.trim() == '') {
            this.demoExamples.nativeElement.remove();
        }
        if (document.getElementById('demoUsageContent').innerHTML.trim() == '') {
            this.demoUsage.nativeElement.remove();
        }
        if (document.getElementById('demoStylingContent').innerHTML.trim() == '') {
            this.demoStyling.nativeElement.remove();
        }
        if (document.getElementById('demoInterfacesContent').innerHTML.trim() == '') {
            this.demoInterfaces.nativeElement.remove();
        }
        if (document.getElementById('demoSettingsContent').innerHTML.trim() == '') {
            this.demoSettings.nativeElement.remove();
        }
        if (document.getElementById('demoSettingsDefaultContent').innerHTML.trim() == '') {
            this.demoSettingsDefault.nativeElement.remove();
        }
        if (document.getElementById('demoEventsContent').innerHTML.trim() == '') {
            this.demoEvents.nativeElement.remove();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DemoComponent.prototype, "description", void 0);
    __decorate([
        core_1.ViewChild('demoDescription'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoDescription", void 0);
    __decorate([
        core_1.ViewChild('demoExamples'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoExamples", void 0);
    __decorate([
        core_1.ViewChild('demoUsage'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoUsage", void 0);
    __decorate([
        core_1.ViewChild('demoStyling'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoStyling", void 0);
    __decorate([
        core_1.ViewChild('demoInterfaces'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoInterfaces", void 0);
    __decorate([
        core_1.ViewChild('demoSettings'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoSettings", void 0);
    __decorate([
        core_1.ViewChild('demoSettingsDefault'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoSettingsDefault", void 0);
    __decorate([
        core_1.ViewChild('demoEvents'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoEvents", void 0);
    __decorate([
        core_1.ViewChild('demoMarkup'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoMarkup", void 0);
    __decorate([
        core_1.ViewChild('demoTypescript'), 
        __metadata('design:type', core_1.ElementRef)
    ], DemoComponent.prototype, "demoTypescript", void 0);
    DemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo',
            template: "\n        <div class=\"row content-header\">\n            <div class=\"content-header__title\">\n                {{ title }}\n            </div>\n            <div #demoDescription class=\"content-header__desc\">\n                <div id=\"demoDescriptionContent\">\n                    <ng-content select=\"[demo-description]\"></ng-content>\n                </div>\n            </div>\n        </div>\n        <div class=\"content-body\">\n            <div #demoExamples class=\"content-body__section content-body__examples\">\n                <div class=\"row content-body__title\">Examples</div>\n                <div id=\"demoExamplesContent\">\n                    <ng-content select=\"[demo-examples]\"></ng-content>\n                </div>\n            </div>\n            <div class=\"content-body__section content-body__markup\">\n                <div class=\"row content-body__title\">Markup</div>\n                <fox-tab-set>\n                    <fox-tab #demoMarkup header=\"Html\" [selected]=\"true\">\n                        <ng-content select=\"[demo-markup]\"></ng-content>\n                    </fox-tab>\n                    <fox-tab #demoTypescript header=\"TypeScript\">\n                        <ng-content select=\"[demo-typescript]\"></ng-content>\n                    </fox-tab>\n                </fox-tab-set>\n            </div>\n            <div #demoUsage class=\"content-body__section content-body__usage\">\n                <div class=\"row content-body__title\">Usage</div>\n                <div id=\"demoUsageContent\">\n                    <ng-content select=\"[demo-usage]\"></ng-content>\n                </div>\n            </div>\n            <div #demoStyling class=\"content-body__section content-body__styling\">\n                <div class=\"row content-body__title\">Styling</div>\n                <div id=\"demoStylingContent\">\n                    <ng-content select=\"[demo-styling]\"></ng-content>\n                </div>\n            </div>\n\n            <div #demoInterfaces class=\"content-body__section content-body__interfaces\">\n                <div class=\"row content-body__title\">Interfaces</div>\n                <div id=\"demoInterfacesContent\">\n                    <ng-content select=\"[demo-interfaces]\"></ng-content>\n                </div>\n            </div>\n            <div #demoSettings class=\"content-body__section content-body__settings\">\n                <div class=\"row content-body__title\">Settings</div>\n                <div id=\"demoSettingsContent\">\n                    <ng-content select=\"[demo-settings]\"></ng-content>\n                </div>\n            </div>\n            <div #demoSettingsDefault class=\"content-body__section content-body__settings-default\">\n                <div class=\"row content-body__title\">Settings default</div>\n                <div id=\"demoSettingsDefaultContent\">\n                    <ng-content select=\"[demo-settings-default]\"></ng-content>\n                </div>\n            </div>\n            <div #demoEvents class=\"content-body__section content-body__events\">\n                <div class=\"row content-body__title\">Events</div>\n                <div id=\"demoEventsContent\">\n                    <ng-content select=\"[demo-events]\"></ng-content>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DemoComponent);
    return DemoComponent;
}());
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map