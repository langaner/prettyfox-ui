export interface NavbarItem {
    id?: number;
    title: string;
    icon?: string;
    items?: Array<Object>;
    route?: string;
    position?: number;
    disabled?: boolean;
    showed?: boolean;
}

export interface NavbarSettings {
    brand?: string;
    color?: string;
    background?: string;
    brandLink?: string;
    fixed?: 'top' | 'bottom' | '';
    showOnHover?: boolean;
}