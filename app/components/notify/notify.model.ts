export interface NotifySettings {
    position?: Array<string>;
    duration?: number;
    closeble?: boolean;
    maxItems?: number;
    addToBottom?: boolean;
    stopOnHover?: boolean;
}

export interface NotifyItemSettings {
    position?: Array<string>;
    duration?: number;
    closeble?: boolean;
}

export interface NotifyItem {
	id?: string;
    title?: string;
    content?: string;
    type?: string;
    createdAt?: Date;
    settings?: NotifyItemSettings
}

export interface NotifyEvent {
	id?: string;
	command: string;
	notify?: NotifyItem;
}
