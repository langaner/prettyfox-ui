export interface TagItem {
    value: number;
    label: string;
}

export interface TagSettings {
    color?: string;
    size?: string;
    duplicates?: boolean;
    addTagOnComma?: boolean;
    addTagOnEnter?: boolean;
    addTagOnPaste?: boolean;
    addTagOnSpace?: boolean;
    addTagOnBlur?: boolean;
    minTagLength?: number;
    autocomplete?: boolean,
    autocompleteItems?: Array<TagItem>
}

export interface TagLangs {
    inputPlaceholder?: string;
}