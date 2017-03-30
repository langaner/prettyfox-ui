import { 
    Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter, ElementRef, ViewChild, KeyValueDiffers   
} from '@angular/core';

import { FileuploaderSettings, FileuploaderLangs } from './fileuploader.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-fileuploader',
    templateUrl: 'fileuploader.component.html',
    styleUrls: ['fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit, OnChanges, DoCheck {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: FileuploaderSettings;
    @Input() langs: FileuploaderLangs;
    @Input() files: any = [];

    @Output() clicked: EventEmitter<any> = new EventEmitter();
    @Output() rejected: EventEmitter<any> = new EventEmitter();
    @Output() preview: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();
    @Output() upload: EventEmitter<any> = new EventEmitter();
    @Output() uploadProgress: EventEmitter<any> = new EventEmitter();
    @Output() uploadAbort: EventEmitter<any> = new EventEmitter();
    @Output() uploadError: EventEmitter<any> = new EventEmitter();
    @Output() uploadDone: EventEmitter<any> = new EventEmitter();

    @ViewChild("fileInput") fileInput: ElementRef;

    public fileValue: any;

    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected queueList: Array<any> = [];
    protected previewPrefix: string = 'preview';
    protected progress: Object = {
        loaded: 0,
        total: 0,
        percent: 0,
        speed: 0,
        time: 0,
        load: 0,
        convertedSpeed: null
    };
    protected done: boolean = false;
    protected error: boolean = false;
    protected abort: boolean = false;
    protected defaultSettings: FileuploaderSettings;
    protected defaultLangs: FileuploaderLangs;
    protected differ: any;

    constructor(
        private el: ElementRef, 
        private overwriteService: OverwriteService,
        private differs: KeyValueDiffers
    ) {
        this.defaultSettings = overwriteService.getSettings('fileuploader');
        this.defaultLangs = overwriteService.getLangs('fileuploader');

        this.differ = differs.find({}).create(null);
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
    }

    ngDoCheck() {
        let changes = this.differ.diff(this.files);

        if(changes) {
            changes.forEachAddedItem((file: any) => {
                this.addToQueue([file.currentValue]);
            });
        }
	}

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        }

        if(changes.langs) {
            let data = (<any>Object).assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = (<any>Object).assign({}, this.defaultLangs, data);
        } 
    }

    viewUploadDialog(event: any): void {
        this.fileInput.nativeElement.click();
    }

    onClick(event: any): void {
        this.clicked.emit({originalEvent: event});
    }

    onChange(event: any): void {
        if(this.settings.multiple) {
            this.files.push(...(<any>Array).from(this.fileInput.nativeElement.files));
        } else {
            this.files[0] = (<any>Array).from(this.fileInput.nativeElement.files)[0];
        }
        
        if (this.settings.filterExtensions && this.settings.allowedExtensions) {
            this.filterByExtension();
        }

        if (this.files.length) {
            this.addToQueue(this.files);
            
            let files: any = (this.settings.multiple) ? this.files : this.files[0];

            this.upload.emit({files: files});
        }
    }

    addToQueue(files: Array<any>): void {
        if(!this.settings.multiple) {
            this.queueList = [];
        }

        for (var key in files) {
            if (this.isFile(files[key]) && !this.inQueue(files[key])) {
                this.queueList.push(files[key]);
            }
        }

        if (this.settings.showPreview) {
            for (var key in files) {
                this.createFileUrl(files[key])
            }
        }

        if (this.settings.autoupload) {
            this.uploadInQueue();
        }
    }

    uploadInQueue(): void {
        this.queueList.forEach((file) => {
            this.uploadFile(file);
        });
    }

    setUploadProgres(progress: Object): void {
        this.progress = progress;
    }

    setUploadAbort(): void {
        this.error = true;
        this.done = true;
    }

    setUploadError(): void {
        this.abort = true;
        this.done = true;
    }

    uploadFile(file: any): void {
        let xhr = new XMLHttpRequest();
        let form = new FormData();

        form.append(this.name, file, file.name);

        let queueIndex = this.queueList.indexOf(file);
        let loadData: any = null;

        xhr.upload.onprogress = (event: ProgressEvent) => {
            if(this.settings.speedProgress) {
                loadData = this.progressData(event);
            }

            this.setUploadProgres(loadData);

            this.uploadProgress.emit(loadData);
        };

        xhr.upload.onabort = (e: Event) => {
            this.setUploadAbort();
            this.uploadAbort.emit(loadData);
        };

        xhr.upload.onerror = (e: Event) => {
            this.setUploadError();
            this.uploadError.emit(loadData);
        };

        xhr.open(this.settings.xhrMethod, this.settings.xhrUrl, true);
        xhr.withCredentials = this.settings.xhrCredentials;

        if (this.settings.xhrHeaders.length) {
            Object.keys(this.settings.xhrHeaders).forEach((key) => {
                xhr.setRequestHeader(key, this.settings.xhrHeaders[key]);
            });
        }

        if (this.settings.xhrAuthToken) {
            xhr.setRequestHeader('Authorization', `${this.settings.xhrAuthTokenPrefix} ${this.settings.xhrAuthToken}`);
        }

        xhr.send(form);

        this.uploadDone.emit(loadData);
    }

    progressData(event: ProgressEvent): any {
        let data: any;

        data.total = event.total;
        data.time = new Date().getTime() - data.time;
        data.loaded = event.loaded;
        data.load = event.loaded - data.load;
        data.speed = data.load / data.time * 1000;
        data.speed = parseInt(<any>data.speed, 10);
        data.convertedSpeed = this.convertBytes(data.speed);
        data.percent = Math.round(event.loaded / event.total * 100);

        return data;
    }

    createFileUrl(file: File): void {
        let reader: FileReader = new FileReader();
        
        reader.addEventListener('load', () => {
            let fileId = this.previewPrefix + '-' + file.name + '-' + file.size;
            let fileEl = document.getElementById(fileId);
            let renderResult: string;
            
            if(this.imageExtensionIsAllow(file.type)) {
                renderResult = reader.result;
                fileEl.setAttribute('src', renderResult);
            } else if(this.fileExtensionIsAllow(file.type)) {
                let extIndex = file.type.lastIndexOf('/');
                renderResult = this.settings.iconsPath + '/' + file.type.substring(extIndex + 1) + '.png';
                
                fileEl.setAttribute('src', renderResult);
                this.preview.emit({url: renderResult});
            } else {
                renderResult = '';
                this.preview.emit({url: renderResult});
            }
        });

        reader.readAsDataURL(file);
    }

    isFile(file: any): boolean {
        return file !== null && (file instanceof Blob || (file.name && file.size));
    }

    inQueue(file: any): boolean {
        let fileInQueue = this.queueList.filter((f) => { return f === file; });
        return fileInQueue.length ? true : false;
    }

    removeFromQueue(index: number): void {
        this.remove.emit({file: this.files[index], files: this.files});

        this.queueList.splice(index, 1);
        this.files.splice(index, 1);
    }

    clearQueue(): void {
        this.queueList = [];
    }

    clearAll(): void {
        this.clearQueue();
        this.files = [];
    }

    getQueueLength(): number {
        return this.queueList.length;
    }

    filterByExtension(): void {
        this.files = this.files.filter((file: any) => {
            let extension: string = file.name.split('.').pop();

            if (this.extensionIsAllow(file.type) || this.extensionIsAllow(extension)) {
                return true;
            }
            
            this.rejected.emit({file: file, reason: this.langs.extensionNotAllowed});

            return false;
        });
    }

    extensionIsAllow(extension: string): boolean {
        if (this.settings.allowedExtensions.indexOf(extension) !== -1 ) {
            return true;
        }

        return false;
    }

    fileExtensionIsAllow(extension: string): boolean {
        if (this.settings.filesExtensions.indexOf(extension) !== -1 ) {
            return true;
        }

        return false;
    }

    imageExtensionIsAllow(extension: string): boolean {
        if (this.settings.imagesExtensions.indexOf(extension) !== -1 ) {
            return true;
        }

        return false;
    }

    convertBytes(bytes: number): string {
        if (bytes === 0) {
            return this.langs.zeroBytes;
        }

        let k = 1024;
        const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        let i: number = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i] + '/s';
    }
}