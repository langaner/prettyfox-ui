import { Component, OnInit } from '@angular/core';

import { ColorpickerSettings, ColorpickerLangs } from '../../components/colorpicker/colorpicker.interfaces'

@Component({
    moduleId: module.id,
    selector: 'colorpicker-demo',
    templateUrl: 'colorpicker.demo.html'
})
export class ColorpickerDemoComponent implements OnInit {
    public color: string = '#1c0de8';
    public colorHex: string = '#e31717';
    public colorRgb: string = 'rgb(227, 23, 23)';
    public colorHue: string = 'hsv(0, 90%, 89%)';

    public settings: ColorpickerSettings = {
        
    };

    public langs: ColorpickerLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}