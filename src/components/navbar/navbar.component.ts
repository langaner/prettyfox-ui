import { 
    Component, OnInit, OnChanges, Input, ElementRef, HostListener  
} from '@angular/core';
import { Router } from '@angular/router';

import { NavbarItem, NavbarSettings } from './navbar.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
    @Input() settings: NavbarSettings;
    @Input() model: NavbarItem;
    
    protected defaultSettings: NavbarSettings;

    constructor(
        private el: ElementRef, 
        public router: Router,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('navbar');
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

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside && false == this.settings.showOnHover) {
            this.collapseAll();
        }
    }

    collapseAll(): void {
        for (let item in this.model) {
            this.model[item].showed = false;
        }
    }

    enterItem(event: any, item: NavbarItem): void {
        if(item.disabled || false == this.settings.showOnHover) {
            return;
        }
        
        item.showed = true;
    }

    leaveItem(event: any, item: NavbarItem): void {
        if(false == this.settings.showOnHover) {
            return;
        }

        item.showed = false;
    }

    clickItem(event: any, item: NavbarItem): void {
        if(item.disabled) {
            return;
        }

        if(this.settings.showOnHover == false) {
            this.collapseAll();
            item.showed = !item.showed;
            event.preventDefault();
            return;
        }
        
        if(item.route) {
            event.preventDefault();
            this.router.navigate([item.route]);
        }
    }
    
    hasChildrens(item: NavbarItem): boolean {
        return item.items != undefined && item.items.length > 0;
    }
}