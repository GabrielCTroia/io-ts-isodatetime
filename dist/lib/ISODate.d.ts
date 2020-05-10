export declare enum ISODateBrand {
    _ = ""
}
/**
 * A String that represents Date w/o Time with this formt: yyyy-mm-dd
 */
export declare type ISODate = ISODateBrand & string;
/**
 * This function checks if the given string is of the ISO Format (yyyy-mm-dd)
 * and if the actual date is a valid one - i.e. not 2014-45-99 or even not 2014-02-31
 *
 * @param s
 */
export declare const isValidISODate: (s: string) => s is ISODateBrand;
/**
 * This maintains ISO Timezone
 *
 * @param date
 */
export declare function toISODate(date: Date | string): ISODate;
export declare enum ISOYearBrand {
    _ = ""
}
/**
 * A String that represents Year with this formt: yyyy
 */
export declare type ISOYear = ISOYearBrand & string;
export declare const isValidISOYear: (s: string) => s is ISOYearBrand;
/**
 * This maintains ISO Timezone
 *
 * @param date
 */
export declare function toISOYear(date: Date | ISODate | string): ISOYear;
export declare enum ISOMonthBrand {
    _ = ""
}
/**
 * A String that represents Year with this formt: yyyy
 */
export declare type ISOMonth = ISOMonthBrand & string;
export declare const isValidISOMonth: (s: string) => s is ISOMonthBrand;
export declare function toISOMonth(date: Date | ISODate | string): ISOMonth;
