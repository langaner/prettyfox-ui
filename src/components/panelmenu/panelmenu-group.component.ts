import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PanelmenuItem, PanelmenuSettings } from './panelmenu.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-panelmenu-group',
    templateUrl: 'panelmenu-group.component.html',
    styleUrls: ['panelmenu-group.component.css']
})
export class PanelmenuGroupComponent implements OnInit {
    @Input() groups: any;
    @Input() settings: PanelmenuSettings;

    constructor(private router: Router) { }

    ngOnInit() { }

    toggle(event: any, child: PanelmenuItem): void {
        event.preventDefault();

        if(child.disabled) {
            return;
        }
        
        if(child.route) {
            this.router.navigate([child.route]);
        } else {
            child.showed = !child.showed;
        }
    }

    hasChildrens(item: PanelmenuItem): boolean {
        return item.items != undefined && item.items.length > 0;
    }

    countChildrens(items: any, itemCounter: number = 0): number {
        if(items.items.length > 0) {
            for (var index = 0; index < items.items.length; index++) {
                if(items.items[index].hasOwnProperty('items')) {
                    itemCounter = this.countChildrens(items.items[index], itemCounter);
                }

                itemCounter += 1;
            }
        }

        return itemCounter;
    }
}