import { 
    Component, OnDestroy, OnInit, Input, Output, EventEmitter, ElementRef, Inject, forwardRef, ViewChild   
} from '@angular/core';
import { Router } from '@angular/router';

import { SlidemenuItem } from './slidemenu.model';
import { SlidemenuComponent } from './slidemenu.component';

@Component({ 
    moduleId: module.id,
    selector: 'fox-slidemenu-item',
    templateUrl: 'slidemenu-item.component.html',
    styleUrls: ['slidemenu-item.component.css']
})
export class SlidemenuItemComponent implements OnInit {
    @Input() item: any;
    @Input() root: boolean;

    @ViewChild('slideitem') slideitemEl: ElementRef;
    @ViewChild('children') children: any;

    constructor(
        @Inject(forwardRef(() => SlidemenuComponent)) private slidemenu: SlidemenuComponent, 
        private router: Router,
        public el: ElementRef
    ) { }

    ngOnInit() { }

    clickItem(event: any, child: SlidemenuItem): void {
        event.preventDefault();

        if(child.disabled) {
            return;
        }

        child.showed = true;
        
        if(this.hasChildrens(child)) {
            
            child.items.forEach(element => {
                element['showed'] = true;
            });

            this.slidemenu.curentItem = child;

            setTimeout(() => {
                this.slidemenu.left -= this.slidemenu.getWidth();
                
                if(this.children.slideitemEl) {
                    console.log( this.slidemenu.settings.actionsHeight);
                    this.slidemenu.height = this.children.slideitemEl.nativeElement.offsetHeight + this.slidemenu.settings.actionsHeight;
                }
            }, 0);
            
        }
        
        if(child.route) {
            this.router.navigate([child.route]);
        }
    }

    hasChildrens(item: SlidemenuItem): boolean {
        return item.items != undefined && item.items.length > 0;
    }
}