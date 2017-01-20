import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'fox-dropdown-item',
    template: `
        <a class="dropdown-item fox-dropdown__item" href="{{ route }}" *ngIf="!divider" 
        [class.disabled]="disabled"
        (click)="onClick($event)"
        >{{ label }}</a>
        <div class="dropdown-divider fox-dropdown__divider" *ngIf="divider"></div>
    `
})
export class DropdownItemComponent {
    @Input() label: string;
    @Input() route: string;
    @Input() disabled: boolean;
    @Input() divider: boolean;

    @Output() clicked: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router) { }

    onClick(event: any): void {
        event.preventDefault();

        if(this.disabled) {
            return;
        }

        this.clicked.emit({route: this.route});

        if(this.route) {
            this.router.navigate([this.route]);
        }
    }
}