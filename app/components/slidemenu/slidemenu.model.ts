export interface SlidemenuItem {
    id?: number;
    title: string;
    icon?: string;
    items?: Array<Object>;
    route?: string;
    position?: number;
    disabled?: boolean;
    showed?: boolean;
}

export interface SlidemenuLangs {
    back?: string;
}

export interface SlidemenuSettings {
    actionsHeight?: number;
    effectDuration?: string;
    easing?: string;
}