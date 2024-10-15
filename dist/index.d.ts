export declare function dotPrint(): string;
export declare function enterLine(): string;
export declare function headLine(): string;
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
