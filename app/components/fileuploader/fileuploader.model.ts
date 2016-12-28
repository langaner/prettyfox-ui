export interface FileuploaderSettings {
    color?: string;
    size?: string;
    multiple?: boolean;
    filterExtensions?: boolean;
    allowedExtensions?: Array<string>;
    imagesExtensions?: Array<string>;
    filesExtensions?: Array<string>;
    showPreview?: boolean;
    autoupload?: boolean;
    speedProgress?: boolean;
    xhrMethod?: string;
    xhrUrl?: string;
    xhrCredentials?: boolean;
    xhrHeaders?: Array<string>,
    xhrAuthToken?: string;
    xhrAuthTokenPrefix?: string;
    iconsPath?: string;
    viewCounter?: boolean;
}

export interface FileuploaderLangs {
    buttonText?: string;
    extensionNotAllowed?: string;
    zeroBytes?: string;
    removeFile?: string;
    uploadedCounter?: string;
    clearAll?: string;
}