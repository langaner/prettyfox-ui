export interface PaginationPage {
    number: number;
    text: string;
    active: boolean;
}

export interface PaginationSettings {
    prevNext?: boolean;
    lastFirst?: boolean;
    max?: number;
    separator?: string;
    size?: string;
    color?: string;
}

export interface PaginationLangs {
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
}
