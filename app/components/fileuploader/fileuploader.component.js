"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
exports.FOX_FILE_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return FileuploaderComponent; }),
    multi: true
};
var FileuploaderComponent = (function () {
    function FileuploaderComponent(el, overwriteService) {
        this.el = el;
        this.overwriteService = overwriteService;
        this.name = '';
        this.clicked = new core_1.EventEmitter();
        this.rejected = new core_1.EventEmitter();
        this.preview = new core_1.EventEmitter();
        this.upload = new core_1.EventEmitter();
        this.uploadProgress = new core_1.EventEmitter();
        this.uploadAbort = new core_1.EventEmitter();
        this.uploadError = new core_1.EventEmitter();
        this.uploadDone = new core_1.EventEmitter();
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.files = [];
        this.queueList = [];
        this.previewPrefix = 'preview';
        this.progress = {
            loaded: 0,
            total: 0,
            percent: 0,
            speed: 0,
            time: 0,
            load: 0,
            convertedSpeed: null
        };
        this.done = false;
        this.error = false;
        this.abort = false;
        this.defaultSettings = overwriteService.getSettings('fileuploader');
        this.defaultLangs = overwriteService.getLangs('fileuploader');
    }
    FileuploaderComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
        this.langs = Object.assign({}, this.defaultLangs, this.langs);
    };
    FileuploaderComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
        if (changes.langs) {
            var data = Object.assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = Object.assign({}, this.defaultLangs, data);
        }
    };
    FileuploaderComponent.prototype.viewUploadDialog = function (event) {
        this.fileInput.nativeElement.click();
    };
    FileuploaderComponent.prototype.onClick = function (event) {
        this.clicked.emit({ originalEvent: event });
    };
    FileuploaderComponent.prototype.onChange = function (event) {
        this.files = Array.from(this.fileInput.nativeElement.files);
        if (this.settings.filterExtensions && this.settings.allowedExtensions) {
            this.filterByExtension();
        }
        if (this.files.length) {
            this.addToQueue(this.files);
            this.upload.emit({ originalEvent: event, files: this.files });
        }
    };
    FileuploaderComponent.prototype.addToQueue = function (files) {
        var _this = this;
        files.forEach(function (file, i) {
            if (_this.isFile(file) && !_this.inQueue(file)) {
                _this.queueList.push(file);
            }
        });
        if (this.settings.showPreview) {
            files.forEach(function (file) { return _this.createFileUrl(file); });
        }
        if (this.settings.autoupload) {
            this.uploadInQueue();
        }
    };
    FileuploaderComponent.prototype.uploadInQueue = function () {
        var _this = this;
        this.queueList.forEach(function (file) {
            _this.uploadFile(file);
        });
    };
    FileuploaderComponent.prototype.setUploadProgres = function (progress) {
        this.progress = progress;
    };
    FileuploaderComponent.prototype.setUploadAbort = function () {
        this.error = true;
        this.done = true;
    };
    FileuploaderComponent.prototype.setUploadError = function () {
        this.abort = true;
        this.done = true;
    };
    FileuploaderComponent.prototype.uploadFile = function (file) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        var form = new FormData();
        form.append(this.name, file, file.name);
        var queueIndex = this.queueList.indexOf(file);
        var loadData = null;
        xhr.upload.onprogress = function (event) {
            if (_this.settings.speedProgress) {
                loadData = _this.progressData(event);
            }
            _this.setUploadProgres(loadData);
            _this.uploadProgress.emit(loadData);
        };
        xhr.upload.onabort = function (e) {
            _this.setUploadAbort();
            _this.uploadAbort.emit(loadData);
        };
        xhr.upload.onerror = function (e) {
            _this.setUploadError();
            _this.uploadError.emit(loadData);
        };
        xhr.open(this.settings.xhrMethod, this.settings.xhrUrl, true);
        xhr.withCredentials = this.settings.xhrCredentials;
        if (this.settings.xhrHeaders.length) {
            Object.keys(this.settings.xhrHeaders).forEach(function (key) {
                xhr.setRequestHeader(key, _this.settings.xhrHeaders[key]);
            });
        }
        if (this.settings.xhrAuthToken) {
            xhr.setRequestHeader('Authorization', this.settings.xhrAuthTokenPrefix + " " + this.settings.xhrAuthToken);
        }
        xhr.send(form);
        this.uploadDone.emit(loadData);
    };
    FileuploaderComponent.prototype.progressData = function (event) {
        var data;
        data.total = event.total;
        data.time = new Date().getTime() - data.time;
        data.loaded = event.loaded;
        data.load = event.loaded - data.load;
        data.speed = data.load / data.time * 1000;
        data.speed = parseInt(data.speed, 10);
        data.convertedSpeed = this.convertBytes(data.speed);
        data.percent = Math.round(event.loaded / event.total * 100);
        return data;
    };
    FileuploaderComponent.prototype.createFileUrl = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function () {
            var fileId = _this.previewPrefix + '-' + file.name + '-' + file.size;
            var fileEl = document.getElementById(fileId);
            var renderResult;
            if (_this.imageExtensionIsAllow(file.type)) {
                renderResult = reader.result;
                fileEl.setAttribute('src', renderResult);
            }
            else if (_this.fileExtensionIsAllow(file.type)) {
                var extIndex = file.type.lastIndexOf('/');
                renderResult = _this.settings.iconsPath + '/' + file.type.substring(extIndex + 1) + '.png';
                fileEl.setAttribute('src', renderResult);
                _this.preview.emit({ url: renderResult });
            }
            else {
                renderResult = '';
                _this.preview.emit({ url: renderResult });
            }
        });
        reader.readAsDataURL(file);
    };
    FileuploaderComponent.prototype.isFile = function (file) {
        return file !== null && (file instanceof Blob || (file.name && file.size));
    };
    FileuploaderComponent.prototype.inQueue = function (file) {
        var fileInQueue = this.queueList.filter(function (f) { return f === file; });
        return fileInQueue.length ? true : false;
    };
    FileuploaderComponent.prototype.removeFromQueue = function (index) {
        this.queueList.splice(index, 1);
        this.files.splice(index, 1);
    };
    FileuploaderComponent.prototype.clearQueue = function () {
        this.queueList = [];
    };
    FileuploaderComponent.prototype.clearAll = function () {
        this.clearQueue();
        this.files = [];
    };
    FileuploaderComponent.prototype.getQueueLength = function () {
        return this.queueList.length;
    };
    FileuploaderComponent.prototype.filterByExtension = function () {
        var _this = this;
        this.files = this.files.filter(function (file) {
            var extension = file.name.split('.').pop();
            if (_this.extensionIsAllow(file.type) || _this.extensionIsAllow(extension)) {
                return true;
            }
            _this.rejected.emit({ file: file, reason: _this.langs.extensionNotAllowed });
            return false;
        });
    };
    FileuploaderComponent.prototype.extensionIsAllow = function (extension) {
        if (this.settings.allowedExtensions.indexOf(extension) !== -1) {
            return true;
        }
        return false;
    };
    FileuploaderComponent.prototype.fileExtensionIsAllow = function (extension) {
        if (this.settings.filesExtensions.indexOf(extension) !== -1) {
            return true;
        }
        return false;
    };
    FileuploaderComponent.prototype.imageExtensionIsAllow = function (extension) {
        if (this.settings.imagesExtensions.indexOf(extension) !== -1) {
            return true;
        }
        return false;
    };
    FileuploaderComponent.prototype.convertBytes = function (bytes) {
        if (bytes === 0) {
            return this.langs.zeroBytes;
        }
        var k = 1024;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i] + '/s';
    };
    // get value(): any {
    //     return this.files;
    // };
    // set value(value: any) {
    //     this.files = value;
    //     this.onChangeCallback(value);
    // }
    FileuploaderComponent.prototype.writeValue = function (value) {
        if (!value) {
            this.files = [];
        }
        else {
            this.files = value;
        }
    };
    FileuploaderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    FileuploaderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FileuploaderComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FileuploaderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileuploaderComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FileuploaderComponent.prototype, "langs", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "clicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "rejected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "preview", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "upload", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "uploadProgress", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "uploadAbort", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "uploadError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FileuploaderComponent.prototype, "uploadDone", void 0);
    __decorate([
        core_1.ViewChild("fileInput"), 
        __metadata('design:type', core_1.ElementRef)
    ], FileuploaderComponent.prototype, "fileInput", void 0);
    FileuploaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-fileuploader',
            templateUrl: 'fileuploader.component.html',
            styleUrls: ['fileuploader.component.css'],
            providers: [exports.FOX_FILE_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, overwrite_service_1.OverwriteService])
    ], FileuploaderComponent);
    return FileuploaderComponent;
}());
exports.FileuploaderComponent = FileuploaderComponent;
//# sourceMappingURL=fileuploader.component.js.map