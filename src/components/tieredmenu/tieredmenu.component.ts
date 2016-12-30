import { 
    Component, OnInit, Input 
} from '@angular/core';

import { TieredmenuItem } from './tieredmenu.model';

@Component({ 
    moduleId: module.id,
    selector: 'fox-tieredmenu',
    templateUrl: 'tieredmenu.component.html',
    styleUrls: ['tieredmenu.component.css']
})
export class TieredmenuComponent implements OnInit {
    @Input() model: TieredmenuItem;
    @Input() root: boolean = true;

    constructor() { }

    ngOnInit() { }
}