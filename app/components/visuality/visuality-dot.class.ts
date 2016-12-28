import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class DotClass {
    public dot: DotItem;
    public canvas: ElementRef;

    public constructor(options: Object) {
        (<any>Object).assign(this, options);
    }
}