import { Component, OnInit } from '@angular/core';

import { TextareaSettings } from '../../components/textarea/textarea.model'

@Component({
    moduleId: module.id,
    selector: 'textarea-demo',
    templateUrl: 'textarea.demo.html'
})
export class TextareaDemoComponent implements OnInit {
    public settings: TextareaSettings = {
        
    };

    public value: string;

    constructor() { }

    ngOnInit() { }
}