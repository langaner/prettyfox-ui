export interface PanelmenuItem {
    id?: number;
    title: string;
    icon?: string;
    items?: Array<Object>;
    route?: string;
    position?: number;
    disabled?: boolean;
    showed?: boolean;
}

export interface PanelmenuSettings {
    tagColor?: string;
    activeGroupColor?: string;
    tagSize?: string;
    counter?: boolean;
}