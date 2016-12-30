import { 
    Directive, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, HostListener, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef, ReflectiveInjector   
} from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipSettings } from './tooltip.model';
import { TooltipClass } from './tooltip.class';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Directive({
    selector: '[foxTooltip]',
    host: {
        '(mouseenter)': 'show($event)',
        '(mouseleave)': 'hide($event)'
    }
})
export class TooltipDirective implements OnInit, OnChanges {
    @Input() settings: TooltipSettings;

    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() hided: EventEmitter<any> = new EventEmitter();

    protected dropped: boolean;
    protected defaultSettings: TooltipSettings;

    private componentRef: ComponentRef<TooltipContainerComponent>;

    constructor(
        private viewContainerRef:ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private el: ElementRef,
        private overwriteService: OverwriteService
    ){
        this.defaultSettings = overwriteService.getSettings('tooltip');
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

    show(event: any): void {
        this.dropped = true;

        let bindingOptions = new TooltipClass({
            color: this.settings.color,
            placement: this.settings.placement,
            title: this.settings.title,
            element: this.el
        });

        let binding = ReflectiveInjector.resolve([
            {
                provide: TooltipClass, useValue: bindingOptions
            }
        ]);

        let childInjector = ReflectiveInjector.fromResolvedProviders(binding, this.viewContainerRef.parentInjector);

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipContainerComponent);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);

        this.showed.emit({originalEvent: event});
    }
    
    hide(event: any): void {
        this.dropped = false;
        this.componentRef.destroy();

        this.hided.emit({originalEvent: event});
    }
}