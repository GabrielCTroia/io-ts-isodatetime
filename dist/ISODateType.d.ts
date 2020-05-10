import * as io from 'io-ts';
/**
 * Accepts input as 2011-09-21!
 */
export declare const isoDate: io.Type<import("./lib").ISODateBrand, string, unknown>;
/**
 * Accepts input as 2019-10-31T00:16:59.998Z
 */
export declare const isoDateFromIsoString: io.Type<import("./lib").ISODateBrand, string, unknown>;
export declare const isoDateTimeFromIsoString: io.Type<import("./lib/ISODateTime").ISODateTimeBrand, string, unknown>;
/**
 * Accepts input as UnixTime
 */
export declare const isoDateFromUnixTime: io.Type<import("./lib").ISODateBrand, number, unknown>;
