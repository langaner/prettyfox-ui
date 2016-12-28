import { Injectable } from '@angular/core';

@Injectable()
export class DomService {
    position(el: HTMLElement): any {
        let elOffset = this.offset(el);
        let position = {top: 0, left: 0};
        let parentElOffset = this.parentOffsetEl(el);

        if (parentElOffset !== document as any) {
            position = this.offset(parentElOffset);
            position.top += parentElOffset.clientTop - parentElOffset.scrollTop;
            position.left += parentElOffset.clientLeft - parentElOffset.scrollLeft;
        }

        let boundingClientRect = el.getBoundingClientRect();

        return {
            width: boundingClientRect.width || el.offsetWidth,
            height: boundingClientRect.height || el.offsetHeight,
            top: elOffset.top - position.top,
            left: elOffset.left - position.left
        };
    }

    placement(hostEl: HTMLElement, targetEl: HTMLElement, place: string): any {
        let left: number;
        let top: number;
        let targetTop = this.position(hostEl).top;
        let targetLeft = this.position(hostEl).left;

        switch(place) {
            case 'right':
                left = targetLeft + hostEl.offsetWidth;
                top = targetTop + (hostEl.offsetHeight - targetEl.offsetHeight) / 2;
            break;
            case 'left':
                left = targetLeft- targetEl.offsetWidth;
                top = targetTop + (hostEl.offsetHeight - targetEl.offsetHeight) / 2;
            break;
            case 'top':
                left = targetLeft + (hostEl.offsetWidth - targetEl.offsetWidth) / 2;
                top = targetTop - targetEl.offsetHeight;
            break;
            case 'bottom':
                left = targetLeft + (hostEl.offsetWidth - targetEl.offsetWidth) / 2;
                top = targetTop + hostEl.offsetHeight;
            break;
        }
        
        return {left: left, top: top};
    }

    offset(el: any): any {
        let boundingClientRect = el.getBoundingClientRect();

        return {
            width: boundingClientRect.width || el.offsetWidth,
            height: boundingClientRect.height || el.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
        };
    }

    style(el: HTMLElement, property: string): string {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el)[property];
        }
        
        return el.style[property];
    }

    isStatic(el: HTMLElement):boolean {
        return (this.style(el, 'position') || 'static' ) === 'static';
    }

    parentOffsetEl(el: HTMLElement): any {
        let offsetParent:any = el.offsetParent || document;

        while (offsetParent && offsetParent !== document && this.isStatic(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || document;
    };
}