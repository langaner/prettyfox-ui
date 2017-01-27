import { Component, OnInit } from '@angular/core';
import { Http, RequestMethod, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { FileuploaderSettings, FileuploaderLangs } from '../../components/fileuploader/fileuploader.model'

@Component({
    moduleId: module.id,
    selector: 'fileuploader-demo',
    templateUrl: 'fileuploader.demo.html'
})
export class FileuploaderDemoComponent implements OnInit {
    public files: Array<any> = [];
    public existenFileUrls: Array<string> = [];
    public filePath: string = 'demo/resources/img/sample/';

    public settings: FileuploaderSettings = {
        
    };

    public langs: FileuploaderLangs = {
        
    };

    constructor(private http: Http) {
        this.existenFileUrls.push('sample_1.jpg');
        this.existenFileUrls.push('sample_2.jpg');
        this.existenFileUrls.push('sample_3.jpg');
    }

    ngOnInit() {
        for (var key in this.existenFileUrls) {
            let filename = this.existenFileUrls[key];
            let ext = filename.split('.').pop();

            this.getFileBlob(filename).subscribe(
                (response) => {
                    let blob = new Blob([response.blob()], {type: ext});
                    let file = new File([blob], filename, {type: ext});
                    this.files.push(file);
            });
        }
    }

    getFileBlob(filename: string): Observable<any> {
        return this.http.get(this.filePath + filename, {
            method: RequestMethod.Get,
            responseType: ResponseContentType.Blob,
            headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
        });
    }

    handleUpload(data: any) {
        if (data && data.files) {
            this.files = data.files;
        }
    }
}