export interface DatagridSettings {
    size?: string;
    color?: 'inverse' | 'default';
    theadColor?: 'inverse' | 'default';
    useEqual?: boolean;
    tableHovered?: boolean;
    tableStripped?: boolean;
    lazyload?: boolean;
    showRowsActions?: boolean;
    colsList?: Array<Object>;
    equalOptions?: Array<any>;
    booleanOptions?: Array<any>;
    totalViewList?: Array<number>;
    showActions?: boolean;
    showCounter?: boolean;
    showTotalView?: boolean;
    showFilters?: boolean;
    showSort?: boolean;
    actionOnRowClick?: Array<any>;
    defaultSortedField?: string;
    defaultSortedOrder?: 'asc' | 'desc';
    customRowActions?: Array<Object>,
}

export interface DatagridLangs {
    checkAll?: string;
    uncheckAll?: string;
    removeChecked?: string;
    actionsCol?: string;
    counterView?: string;
    counterOf?: string;
    counterPages?: string;
    removePopoverTitle?: string;
    cancelRemove?: string;
    remove?: string;
    create?: string;
    edit?: string;
    view?: string;
    totalRowsView?: string;
    filterIt?: string;
    filterTitle?: string;
    filterBy?: string;
    resetIt?: string;
    confirme?: any;
}

export interface DatagridRoutes {
    edit?: RouteItem;
    view?: RouteItem;
    remove?: RouteItem;
    create?: RouteItem;
}

export interface DatagridFilter {
    field: string;
    type: string;
    data?: any;
}

export interface LazyloadEvent {
    first: number;
    rows: number;
    total: number;
    sortedField: string;
    sortedOrder: string;
    filters: Array<any>;
    page: number;
}

export interface RouteItem {
    route: string;
    parametrs?: Array<string>;
}