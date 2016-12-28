import { 
    Component, OnInit, Input  
} from '@angular/core';
import { Router } from '@angular/router';

import { NavbarItem } from './navbar.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-navbar-item',
    templateUrl: 'navbar-item.component.html',
    styleUrls: ['navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {
    @Input() item: any;
    @Input() root: boolean;
    
    constructor(public router: Router) { }

    ngOnInit() { }

    enterItem(event: any, child: NavbarItem) {
        if(child.disabled) {
            return;
        }
        
        child.showed = true;
    }

    leaveItem(event: any, child: NavbarItem): void {
        child.showed = false;
    }

    clickItem(event: any, child: NavbarItem): void {
        if(child.disabled) {
            event.preventDefault();
            return;
        }
        
        if(child.route) {
            event.preventDefault();
            this.router.navigate([child.route]);
        }
    }
    
    hasChildrens(item: NavbarItem): boolean {
        return item.items != undefined && item.items.length > 0;
    }
}