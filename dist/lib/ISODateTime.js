"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var ISODateTimeBrand;
(function (ISODateTimeBrand) {
    ISODateTimeBrand["_"] = "";
})(ISODateTimeBrand = exports.ISODateTimeBrand || (exports.ISODateTimeBrand = {}));
// Stolen from this Stack Overflow Answer:
// https://stackoverflow.com/a/37563868/2093626
// This validates time not only dates as most of the other libraries
var ISO8601FullRegex = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
exports.isValidISODateTime = function (s) {
    return s.match(ISO8601FullRegex) !== null && date_fns_1.isValid(date_fns_1.parseISO(s));
};
exports.toISODateTime = function (d) {
    if (typeof d === 'string') {
        if (exports.isValidISODateTime(d)) {
            return d;
        }
        throw new Error("toValidISOString() Invalid String Error: " + d);
    }
    var generatedISOString = d.toISOString();
    if (!exports.isValidISODateTime(generatedISOString)) {
        throw new Error("toValidISOString() Invalid Date Error: " + d);
    }
    return generatedISOString;
};
//# sourceMappingURL=ISODateTime.js.map