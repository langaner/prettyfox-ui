export interface ColorpickerSettings {
    size?: string;
    spectrumHeight?: number;
    spectrumWidth?: number;
    hueHeight?: number;
    hueWidth?: number;
    alphaHeight?: number;
    alphaWidth?: number;
    palette?: Array<Array<string>>
    outputFormat?: 'hex' | 'rgb' | 'hsv';
    showPallete?: boolean;
    showPicker?: boolean;
}

export interface ColorpickerLangs {
    
}