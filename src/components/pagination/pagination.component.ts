import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, Self 
} from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

import { PaginationPage, PaginationSettings, PaginationLangs } from './pagination.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.css'],
    providers: [NgModel]
})
export class PaginationComponent implements ControlValueAccessor, OnInit, OnChanges {
    @Input() settings: PaginationSettings;
    @Input() langs: PaginationLangs;
    @Input() disabled: boolean;
    @Input() total: number;

    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Output() prevClicked: EventEmitter<any> = new EventEmitter();
    @Output() nextClicked: EventEmitter<any> = new EventEmitter();
    @Output() lastClicked: EventEmitter<any> = new EventEmitter();
    @Output() firstClicked: EventEmitter<any> = new EventEmitter();

    public model: NgModel;
    public pages:Array<PaginationPage>;

    protected innerPage: number = 1;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };
    protected defaultSettings: PaginationSettings;
    protected defaultLangs: PaginationLangs;

    constructor(
        private el: ElementRef, 
        @Self() model:NgModel,
        private overwriteService: OverwriteService
    ) {
        this.defaultSettings = overwriteService.getSettings('pagination');
        this.defaultLangs = overwriteService.getLangs('pagination');
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.model = model;
        model.valueAccessor = this;
    }

    ngOnChanges(changes: any) {
        if(changes.total) {
            this.pages = this.getPages(this.page);
        }

        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 

        if(changes.langs) {
            let data = (<any>Object).assign({}, changes.langs.previousValue, changes.langs.currentValue);
            this.langs = (<any>Object).assign({}, this.defaultLangs, data);
        }
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.innerPage = this.model.model;
    }

    private getPages(current:number): Array<PaginationPage> {
        let pages:Array<PaginationPage> = [];
        let startPage = 1;
        let endPage = this.total;
        let isMax = (this.settings.max !== 0) && (this.settings.max < this.total) ? true : false;
        
        if(isMax) {
            startPage = Math.max(current - Math.floor(this.settings.max / 2), 1);
            endPage = startPage + this.settings.max - 1;

            if (endPage > this.total) {
                endPage = this.total;
                startPage = endPage - this.settings.max + 1;
            }
        }
        
        for (let n = startPage; n <= endPage; n++) {
            let page = {
                number: n, 
                text: n.toString(), 
                active: (n === current)
            };

            pages.push(page);
        }

        if (isMax) {
            if (startPage > 1) {
                let prev = {
                    number: (startPage - 1), 
                    text: this.settings.separator, 
                    active: false
                };
                pages.unshift(prev);
            }

            if (endPage < this.total) {
                let next = {
                    number: (startPage + 1), 
                    text: this.settings.separator, 
                    active: false
                };
                
                pages.push(next);
            }
        }
        
        return pages;
    }

    public select(event: any, page:number): void {
        event.preventDefault();

        if (!this.disabled) {
            this.writeValue(page);
            this.model.viewToModelUpdate(this.page);

            this.selected.emit({originalEvent: event, page: page});
        }
    }

    prevSelect(event: any, page:number): void {
        this.select(event, page - 1);
        this.prevClicked.emit({originalEvent: event, page: this.page});
    }

    nextSelect(event: any, page:number): void {
        this.select(event, page + 1);
        this.nextClicked.emit({originalEvent: event, page: this.page});
    }

    lastSelect(event: any): void {
        this.select(event, this.total);
        this.lastClicked.emit({originalEvent: event});
    }

    firstSelect(event: any): void {
        this.select(event, 1);
        this.firstClicked.emit({originalEvent: event});
    }

    get page(): any {
        return (this.innerPage == undefined) ? 1 : this.innerPage;
    };

    set page(value: any) {
        this.innerPage = value > this.total ? this.total : (value || 1);
        
        this.onChangeCallback(value);
    }

    writeValue(value: any) {
        this.innerPage = value;
        this.pages = this.getPages(this.page);
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public hasPrev(): boolean {
        return this.page === 1;
    }

    public hasNext(): boolean {
        return this.page === this.total;
    }
}