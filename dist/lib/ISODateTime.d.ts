export declare enum ISODateTimeBrand {
    _ = ""
}
export declare type ISODateTime = ISODateTimeBrand & string;
export declare const isValidISODateTime: (s: string) => s is ISODateTimeBrand;
export declare const toISODateTime: (d: Date | string) => ISODateTime;
