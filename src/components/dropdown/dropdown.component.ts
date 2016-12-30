import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, QueryList, ContentChildren, ElementRef, HostListener
} from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';
import { DropdownSettings } from './dropdown.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

@Component({
    moduleId: module.id,
    selector: 'fox-dropdown',
    templateUrl: 'dropdown.component.html'
})
export class DropdownComponent implements OnInit, OnChanges {
    @Input() settings: DropdownSettings;
    @Input() disabled: boolean;

    @Output() submited: EventEmitter<any> = new EventEmitter();
    @Output() showed: EventEmitter<any> = new EventEmitter();
    @Output() outsideClick: EventEmitter<any> = new EventEmitter();

    @ContentChildren(DropdownItemComponent) items: QueryList<DropdownItemComponent>;

    protected dropped: boolean;
    protected defaultSettings: DropdownSettings;

    constructor(private el: ElementRef, private overwriteService: OverwriteService) {
        this.defaultSettings = overwriteService.getSettings('dropdown');
    }
    
    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
    }

    ngOnChanges(changes: any) {
        if(changes.settings) {
            let data = (<any>Object).assign({}, changes.settings.previousValue, changes.settings.currentValue);
            this.settings = (<any>Object).assign({}, this.defaultSettings, data);
        } 
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dropped = false;
            this.outsideClick.emit({originalEvent: event});
        }
    }

    show(event: any): void {
        if(this.disabled) {
            return;
        }

        this.dropped = !this.dropped;

        this.showed.emit({originalEvent: event});
    }

    onSubmit(event: any): void {
        this.submited.emit({originalEvent: event});
    }
}