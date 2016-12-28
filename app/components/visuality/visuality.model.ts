export interface VisualitySettings {
    height?: number;
}
export interface VisualityLangs {
    
}
export interface DotItem {
    id: number;
    data?: object;
    name?: string;
    description?: string;
    type: string;
    color?: string;
    icon?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    styleClass?: string;
    disabled?: boolean;
    editable?: boolean;
    delitable?: boolean;
    draggable?: boolean;
    relations?: Array<Object>;
}
export interface DotType {
    name?: string;
    alias: string;
    component?: any;
}