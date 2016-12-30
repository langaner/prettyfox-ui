export interface TieredmenuItem {
    id?: number;
    title: string;
    icon?: string;
    items?: Array<Object>;
    route?: string;
    position?: number;
    disabled?: boolean;
    showed?: boolean;
}