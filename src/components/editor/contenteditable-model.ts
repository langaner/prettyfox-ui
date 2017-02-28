import { Directive, ElementRef, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Directive({
	selector: '[contenteditableModel]',
	host: {
		'(blur)': 'onBlur()'
	}
})
export class ContenteditableModel implements OnChanges {
	@Input('contenteditableModel') model: any;

	@Output('contenteditableModelChange') update = new EventEmitter();

	private lastViewModel: any;

	constructor(private elRef: ElementRef) { }

	ngOnChanges(changes: any) {
		if (this.isPropertyUpdated(changes, this.lastViewModel)) {
			this.lastViewModel = this.model
			this.refreshView()
		}
	}

    onBlur() {
		let value = this.elRef.nativeElement.innerHTML;
		this.lastViewModel = value
		this.update.emit(value)
	}

    private isPropertyUpdated(changes: {[key: string]: any}, viewModel: any): boolean {
        if (!changes.hasOwnProperty('model')) return false;

        const change = changes['model'];
        
        if (change.isFirstChange()) return true;

        return !this.looseIdentical(viewModel, change.currentValue);
    }

    private looseIdentical(a: any, b: any): boolean {
        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
    }

	private refreshView() {
		this.elRef.nativeElement.innerHTML = this.model;
	}
}
