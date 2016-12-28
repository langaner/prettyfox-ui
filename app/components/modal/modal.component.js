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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var overwrite_service_1 = require('../../shared/services/overwrite.service');
var ModalComponent = (function () {
    function ModalComponent(document, overwriteService) {
        this.document = document;
        this.overwriteService = overwriteService;
        this.showed = new core_1.EventEmitter();
        this.closed = new core_1.EventEmitter();
        this.isShowed = false;
        this.defaultSettings = overwriteService.getSettings('modal');
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.settings = Object.assign({}, this.defaultSettings, this.settings);
    };
    ModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes.settings) {
            var data = Object.assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = Object.assign({}, this.defaultSettings, data);
        }
    };
    ModalComponent.prototype.onClick = function (event, targetElement) {
        if (this.isShowed == false) {
            return;
        }
        var clickedInside = targetElement.classList.contains('modal');
        if (clickedInside) {
            this.close(event);
        }
    };
    ModalComponent.prototype.show = function (event) {
        if (this.isShowed) {
            return;
        }
        this.isShowed = true;
        this.createBackdrop();
        this.showed.emit({ originalEvent: event });
    };
    ModalComponent.prototype.close = function (event) {
        this.isShowed = false;
        this.document.body.classList.remove('modal-open');
        this.backdrop.remove();
        this.closed.emit({ originalEvent: event });
    };
    ModalComponent.prototype.createBackdrop = function () {
        this.document.body.classList.add('modal-open');
        this.backdrop = this.document.createElement('div');
        this.backdrop.classList.add('modal-backdrop', 'fade', 'in');
        this.document.body.appendChild(this.backdrop);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ModalComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalComponent.prototype, "target", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalComponent.prototype, "showed", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ModalComponent.prototype, "closed", void 0);
    __decorate([
        core_1.HostListener('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, HTMLElement]), 
        __metadata('design:returntype', void 0)
    ], ModalComponent.prototype, "onClick", null);
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fox-modal',
            templateUrl: 'modal.component.html'
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Object, overwrite_service_1.OverwriteService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map