import { 
    Component, OnInit, Input, Output, EventEmitter 
} from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbItem } from "./breadcrumb.model"

@Component({ 
    moduleId: module.id,
    selector: 'fox-breadcrumb',
    templateUrl: 'breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
    @Input() model:Array<BreadcrumbItem>;

    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor(public router: Router) { }

    ngOnInit() { }

    itemClick(event: any, item: BreadcrumbItem): void {
        if(item.disabled) {
            event.preventDefault();
            return;
        }
        
        if(!item.url || item.route) {
            event.preventDefault();
        }
          
        if(item.route) {
            this.router.navigate(item.route);
        }

        this.clicked.emit({item: item});
    }
}