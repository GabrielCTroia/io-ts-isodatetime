"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = require("io-ts");
var Either_1 = require("fp-ts/lib/Either");
var date_fns_1 = require("date-fns");
var DateFromUnixTime_1 = require("io-ts-types/lib/DateFromUnixTime");
var ISODateTime_1 = require("./lib/ISODateTime");
var lib_1 = require("./lib");
/**
 * Accepts input as 2011-09-21!
 */
exports.isoDate = new io.Type('ISODate', function (u) { return io.string.is(u) && lib_1.isValidISODate(u); }, function (u, c) { return Either_1.either.chain(io.string.validate(u, c), function (s) {
    try {
        return io.success(lib_1.toISODate(s));
    }
    catch (e) {
        return io.failure(u, c);
    }
}); }, String);
/**
 * Accepts input as 2019-10-31T00:16:59.998Z
 */
exports.isoDateFromIsoString = new io.Type('ISODateFromISOString', function (u) { return io.string.is(u) && date_fns_1.parseISO(u) instanceof Date; }, function (u, c) { return Either_1.either.chain(io.string.validate(u, c), function (s) {
    try {
        return io.success(lib_1.toISODate(s.slice(0, 10)));
    }
    catch (e) {
        return io.failure(u, c);
    }
}); }, String);
exports.isoDateTimeFromIsoString = new io.Type('ISODateTimeFromISOString', function (u) { return io.string.is(u) && date_fns_1.parseISO(u) instanceof Date; }, function (u, c) { return Either_1.either.chain(io.string.validate(u, c), function (s) {
    try {
        return io.success(ISODateTime_1.toISODateTime(s));
    }
    catch (e) {
        return io.failure(u, c);
    }
}); }, String);
/**
 * Accepts input as UnixTime
 */
exports.isoDateFromUnixTime = new io.Type('ISODateFromUnixTime', function (u) { return DateFromUnixTime_1.DateFromUnixTime.is(u); }, function (u, c) { return Either_1.either.chain(io.number.validate(u, c), function (n) {
    try {
        var dateAsISOString = new Date(n * 1000).toISOString();
        return io.success(lib_1.toISODate(dateAsISOString.slice(0, 10)));
    }
    catch (e) {
        return io.failure(u, c);
    }
}); }, Number);
//# sourceMappingURL=ISODateType.js.map