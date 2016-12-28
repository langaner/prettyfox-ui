import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, ViewChild  
} from '@angular/core';

import { SlidemenuItem, SlidemenuSettings, SlidemenuLangs } from './slidemenu.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({ 
    moduleId: module.id,
    selector: 'fox-slidemenu',
    templateUrl: 'slidemenu.component.html',
    styleUrls: ['slidemenu.component.css']
})
export class SlidemenuComponent implements OnInit, OnChanges {
    @Input() model: SlidemenuItem;
    @Input() settings: SlidemenuSettings;
    @Input() langs: SlidemenuLangs;

    @ViewChild('slidemenu') slidemenuEl: ElementRef;
    @ViewChild('children') children: any;

    public left: number = 0;
    public height: number;
    public curentItem: SlidemenuItem;

    protected defaultSettings: SlidemenuSettings;
    protected defaultLangs: SlidemenuLangs;

    constructor(private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('slidemenu');
        this.defaultLangs = overwriteService.getLangs('slidemenu');
    }

    ngOnInit() {
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
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

    getWidth(): number {
        return this.slidemenuEl.nativeElement.offsetWidth;
    }

    goBack(): void {
        this.left += this.getWidth();
        
        if(this.curentItem) {
            this.curentItem['showed'] = false;
            this.curentItem.items.forEach(element => {
                element['showed'] = false;
            });
        }
        
        if(this.left != 0) {
            this.height = this.children.slideitemEl.nativeElement.offsetHeight + this.settings.actionsHeight;
        } else {
            this.height = this.children.slideitemEl.nativeElement.offsetHeight;
        }
    }
}