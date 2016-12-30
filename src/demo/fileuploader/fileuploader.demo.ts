import { Component, OnInit } from '@angular/core';

import { FileuploaderSettings, FileuploaderLangs } from '../../components/fileuploader/fileuploader.model'

@Component({
    moduleId: module.id,
    selector: 'fileuploader-demo',
    templateUrl: 'fileuploader.demo.html'
})
export class FileuploaderDemoComponent implements OnInit {
    public files: Array<any> = [];

    public settings: FileuploaderSettings = {
        
    };

    public langs: FileuploaderLangs = {
        
    };

    constructor() { }

    ngOnInit() { }

    handlePreview(data: any) {
        if (data && data.url) {
            
        }
    }

    handleUpload(data: any) {
        console.log(data);
        if (data && data.files) {
            this.files = data.files;
        }
    }
}