export interface MultiselectSettings {
    search?: boolean;
    limit?: number;
    closeOnSelect?: boolean;
    checkAll?: boolean;
    uncheckAll?: boolean;
    titleMaxItems?: number;
    maxHeight?: string;
    color?: string;
    size?: string;
    single?: boolean;
    titleField?: string;
    valueField?: string;
}

export interface MultiselectLangs {
    checkAllText?: string;
    uncheckAllText?: string;
    searchPlaceholder?: string;
    defaultTitle?: string;
    selectedItemsText?: string;
}

export interface MultiselectAjax {
    model: string;
    route: string;
    query: string;
    searchFields: Array<string>;
}