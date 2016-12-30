import { Component, OnInit } from '@angular/core';

import { TagItem, TagSettings, TagLangs } from '../../components/tag/tag.model';

@Component({
    moduleId: module.id,
    selector: 'tag-demo',
    templateUrl: 'tag.demo.html'
})
export class TagDemoComponent implements OnInit {
    public tags: Array<TagItem> = [
        { value: 1, label: 'Tag 1' },
        { value: 2, label: 'Tag 2' },
        { value: 6, label: 'Tag 3' },
        { value: 4, label: 'Tag 4' },
        { value: 5, label: 'Tag 5' }
    ];
    public settings: TagSettings = {
        
    };
    public langs: TagLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}