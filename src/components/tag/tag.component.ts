import { 
    Component, OnInit, OnChanges, Input, Output, EventEmitter, ElementRef, forwardRef, ViewChild, HostListener 
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { TagItem, TagSettings, TagLangs } from './tag.model';

import { OverwriteService } from '../../shared/services/overwrite.service';

export const FOX_TAG_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TagComponent),
    multi: true
};

export const KEYS = {
    backspace: 8,
    comma: 188,
    enter: 13,
    space: 32
}

@Component({ 
    moduleId: module.id,
    selector: 'fox-tag',
    templateUrl: 'tag.component.html',
    styleUrls: ['tag.component.css'],
    providers: [FOX_TAG_CONTROL_VALUE_ACCESSOR]
})
export class TagComponent implements ControlValueAccessor, OnInit, OnChanges {
    @Input() name: string = '';
    @Input() disabled: boolean;
    @Input() settings: TagSettings;
    @Input() langs: TagLangs;

    @Output() add: EventEmitter<Array<TagItem>> = new EventEmitter<Array<TagItem>>();
    @Output() removed: EventEmitter<TagItem> = new EventEmitter<TagItem>();

    @ViewChild('tagsInput') tagsInput: ElementRef;

    protected tagsList: Array<TagItem> = [];
    protected selected: number;
    protected searchText: string = '';
    protected defaultSettings: TagSettings;
    protected defaultLangs: TagLangs;
    protected onTouchedCallback: () => void = () => { };
    protected onChangeCallback: (_: any) => void = () => { };

    constructor(private overwriteService: OverwriteService, private el: ElementRef) {
        this.defaultSettings = overwriteService.getSettings('tag');
        this.defaultLangs = overwriteService.getLangs('tag');
    }

    ngOnInit() {
        this.settings = (<any>Object).assign({}, this.defaultSettings, this.settings);
        this.langs = (<any>Object).assign({}, this.defaultLangs, this.langs);
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

    @HostListener('document:click', ['$event', '$event.target'])
    public onClickOutside(event: any, targetElement: HTMLElement): void {
        if (!targetElement || !this.settings.autocomplete) {
            return;
        }

        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.searchText = '';
        }
    }

    onPaste(event: any): void {
        let data = this.clipboardData(event).trim();
        let tags = data.split(',');

        this.addTags(tags);
        this.reselectTag();
        this.clearInput();
    }

    clipboardData(event: any): string {
        let clipboard = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        
        return clipboard.getData('text/plain');
    }

    onKeydown(event: any): void {
        if(this.disabled) {
            return;
        }

        let key = event.keyCode;
        
        switch (key) {
            case KEYS.backspace:
                this.handleBackspace();
                break;
            case KEYS.enter:
                if(this.settings.addTagOnEnter) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case KEYS.comma:
                if(this.settings.addTagOnComma) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case KEYS.space:
                if(this.settings.addTagOnSpace) {
                    this.addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
        }
    }

    onBlur(event: any): void {
        if(this.disabled || this.settings.autocomplete) {
            return;
        }

        if (this.settings.addTagOnBlur) { 
            this.addTags([this.inputValue]); 
        }
    }

    isTagUnique(tagString: any): boolean {
        tagString = (tagString instanceof Object) ? tagString.label : tagString;

        let tagExist = (this.tagsList && this.tagsList.filter((tag) => { return tag.label === tagString; }).length) ? false : true;
        
        return this.settings.duplicates ? true : tagExist;
    }

    isTagValid(tagString: any): boolean {
        tagString = (tagString instanceof Object) ? tagString.label : tagString;

        if(tagString.length < this.settings.minTagLength || tagString == '') {
            return false;
        }

        return true;
    }

    addTags(tags: Array<any>): void {
        if(this.disabled) {
            return;
        }

        let newTags: Array<TagItem> = [];
        let validTags = tags.map(tag => (tag instanceof Object) ? tag : tag.trim())
                            .filter(tag => this.isTagValid(tag))
                            .filter(tag => this.isTagUnique(tag));
    
        validTags.forEach(item => {
            newTags.push({
                'value': (item instanceof Object) ? item.value : this.maxTagsListKey() + 1,
                'label': (item instanceof Object) ? item.label : item
            });
        });
        
        if(this.tagsList) {
            this.tagsList = this.tagsList.concat(newTags);
        } else {
            this.tagsList = newTags;
        }
        
        this.reselectTag();
        this.onChangeCallback(this.tagsList);
        this.add.emit(newTags);

        this.clearInput();
    }

    removeTag(tagIndex: number): void {
        console.log(tagIndex);
        let tag = this.tagsList[tagIndex];

        this.tagsList.splice(tagIndex, 1);
        this.reselectTag();

        this.onChangeCallback(this.tagsList);
        this.removed.emit(tag);
    }

    clearInput(): void {
        this.tagsInput.nativeElement.value = '';
    }

    handleBackspace(): void {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!this.isBlank(this.selected)) {
                this.removeTag(this.selected);
            } else {
                this.selected = this.tagsList.length - 1;
            }
        }
    }

    reselectTag(): void {
        this.selected = null;
    }

    onAutocompleteItem(event: any, item: TagItem) {
        this.addTags([item]); 
    }

    isBlank(obj: any): boolean {
        return obj === undefined || obj === null;
    }

    maxTagsListKey(): number {
        if(!this.tagsList || this.tagsList.length == 0) {
            return 1;
        }
        
        let index = Object.keys(this.tagsList).reduce((a, b) => { return this.tagsList[a].value > this.tagsList[b].value ? a : b });

        return this.tagsList[index].value;
    }

    get inputValue(): string {
        return this.tagsInput.nativeElement.value;
    }

    get value(): any {
        return this.tagsList;
    };

    set value(value: any) {
        this.tagsList = value;
        this.onChangeCallback(value);
    }

    writeValue(value: any) {
        if (value !== this.tagsList) {
            this.tagsList = value;
        }
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}