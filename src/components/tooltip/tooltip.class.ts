import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class TooltipClass {
    public color: string;
    public placement: string;
    public title: string;
    public element: ElementRef;

    public constructor(options: Object) {
        (<any>Object).assign(this, options);
    }
}