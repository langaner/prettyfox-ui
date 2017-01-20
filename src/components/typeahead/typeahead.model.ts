export interface TypeaheadSettings {
    size?: string;
    titleField?: string;
    valueField?: string;
    lazyload?: boolean;
}

export interface TypeaheadLangs {
    noResults?: string;
}

export interface LazyloadEvent {
    value: string;
}