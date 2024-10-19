interface printerSettingsType {
    dots?: number;
    lineSpacing?: number;
}
export declare function printerSettings(settings?: printerSettingsType): string;
export declare function dotPrint(dots?: number): string;
export declare function enterLine(): string;
export declare function sLine(): string;
export declare function dLine(): string;
export declare function lineRight(): string;
export declare function lineLeft(): string;
export declare function textCenter(text: string): string;
export declare function textLeft(text: string): string;
export declare function textRight(text: string): string;
interface QRCodeOptions {
    text: string;
    model?: number;
    size?: number;
}
export declare function QRCode({ text, model, size }: QRCodeOptions): string;
export {};
