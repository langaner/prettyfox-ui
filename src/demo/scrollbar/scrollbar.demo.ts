import { Component, OnInit } from '@angular/core';

import { ScrollbarSettings } from '../../components/scrollbar/scrollbar.model'

@Component({
    moduleId: module.id,
    selector: 'scrollbar-demo',
    templateUrl: 'scrollbar.demo.html'
})
export class ScrollbarDemoComponent implements OnInit {
    public text: string = '';
    public settings: ScrollbarSettings = {
        
    };

    constructor() { }

    ngOnInit() {
        for (var index = 0; index < 10; index++) {
            this.text += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>';
        }
    }
}