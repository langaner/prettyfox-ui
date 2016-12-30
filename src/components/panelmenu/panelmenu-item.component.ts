import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PanelmenuItem } from './panelmenu.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-panelmenu-item',
    templateUrl: 'panelmenu-item.component.html',
    styleUrls: ['panelmenu-item.component.css']
})
export class PanelmenuItemComponent implements OnInit {
    @Input() item: PanelmenuItem;
    @Input() disabled: boolean;
    @Input() level: number = 1;
    @Input() paddingVale: number = 25;

    constructor(private router: Router) { }

    ngOnInit() { }

    toggle(event: any, child: PanelmenuItem) {
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

    hasChildrens(item: PanelmenuItem) {
        return item.items != undefined && item.items.length > 0;
    }
}