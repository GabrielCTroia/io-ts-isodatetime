import * as io from 'io-ts';
/**
 * Accepts input as 2011-09-21!
 */
export declare const ISODate: io.Type<import("./lib").ISODateBrand, string, unknown>;
/**
 * Accepts input as 2019-10-31T00:16:59.998Z
 */
export declare const ISODateFromISOString: io.Type<import("./lib").ISODateBrand, string, unknown>;
export declare const ISODateTimeFromISOString: io.Type<import("./lib/ISODateTime").ISODateTimeBrand, string, unknown>;
/**
 * Accepts input as UnixTime
 */
export declare const ISODateFromUnixTime: io.Type<import("./lib").ISODateBrand, number, unknown>;
