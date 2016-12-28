import { 
    Component, OnInit, Input  
} from '@angular/core';
import { Router } from '@angular/router';

import { TieredmenuItem } from './tieredmenu.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-tieredmenu-item',
    templateUrl: 'tieredmenu-item.component.html',
    styleUrls: ['tieredmenu-item.component.css']
})
export class TieredmenuItemComponent implements OnInit {
    @Input() item: any;
    @Input() root: boolean;
    
    constructor(public router: Router) { }

    ngOnInit() { }

    enterItem(event: any, child: TieredmenuItem): void {
        if(child.disabled) {
            return;
        }
        
        child.showed = true;
    }

    leaveItem(event: any, child: TieredmenuItem): void {
        child.showed = false;
    }

    clickItem(event: any, child: TieredmenuItem): void {
        if(child.disabled) {
            event.preventDefault();
            return;
        }
        
        if(child.route) {
            event.preventDefault();
            this.router.navigate([child.route]);
        }
    }
    
    hasChildrens(item: TieredmenuItem): boolean {
        return item.items != undefined && item.items.length > 0;
    }
}