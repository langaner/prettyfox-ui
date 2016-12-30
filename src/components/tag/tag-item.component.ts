import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fox-tag-item',
    templateUrl: 'tag-item.component.html',
    styleUrls: ['tag-item.component.css']
})
export class TagItemComponent {
    @Input() selected: boolean;
    @Input() key: string;
    @Input() name: string;
    @Input() index: number;
    @Input() color: string;
    @Input() size: string;

    @Output() removed: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    remove(): void {
        this.removed.emit(this.index);
    }
}