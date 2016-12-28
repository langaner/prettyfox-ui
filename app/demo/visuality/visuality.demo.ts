import { Component, OnInit } from '@angular/core';

import { VisualitySettings, VisualityLangs, DotItem, DotType } from '../../components/visuality/visuality.interfaces'

@Component({
    moduleId: module.id,
    selector: 'visuality-demo',
    templateUrl: 'visuality.demo.html'
})
export class VisualityDemoComponent implements OnInit {
    public settings: VisualitySettings = {
        
    };
    public settings: VisualityLangs = {
        
    };
    public dots = [
        {
            id: 1,
            name: 'test dot 1',
            description: 'test dot 1',
            type: 'roundDot',
            color: '#00ff00',
            width: 50,
            height: 50,
            x: 100,
            y: 100,
            disabled: false,
            editable: true,
            delitable: true,
            draggable: true
        },
        {
            id: 2,
            name: 'test dot 2',
            description: 'test dot 2',
            type: 'roundDot',
            color: '#ff0000',
            width: 50,
            height: 50,
            x: 100,
            y: 100,
            disabled: false,
            editable: true,
            delitable: true,
            draggable: true
        }
    ];
    public types = [

    ];

    constructor() { }

    ngOnInit() { }
}