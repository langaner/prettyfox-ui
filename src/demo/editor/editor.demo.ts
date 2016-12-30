import { Component, OnInit } from '@angular/core';

import { EditorSettings, EditorLangs } from '../../components/editor/editor.model';

@Component({
    moduleId: module.id,
    selector: 'editor-demo',
    templateUrl: 'editor.demo.html'
})
export class EditorDemoComponent implements OnInit {
    public text: string = '';

    public settings: EditorSettings = {
        
    };

    public langs: EditorLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}