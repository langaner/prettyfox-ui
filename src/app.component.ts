import { Component, OnInit } from '@angular/core';

import { menuData } from './menu.data';

import { HelperService } from './shared/services/helper.service';

@Component({
    moduleId: module.id,
    selector: 'fox-app',
    templateUrl: 'app.component.html'
})
export class AppComponent  implements OnInit {
    private menu: Array<Object>;

    protected menuItems: any;

    constructor(private helperService: HelperService){}

    ngOnInit() {
        this.menu = menuData;
        
        this.menu.forEach((element) => {
            if(element['items']) {
                element['items'] = this.helperService.orderBy(element['items'], 'title');
            }
        });
    }
}