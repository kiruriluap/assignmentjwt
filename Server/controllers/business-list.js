"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessAddList = exports.DisplayAddList = exports.DisplayBusinessList = void 0;
const business_1 = __importDefault(require("../Models/business"));
const Util_1 = require("../../Util");
function DisplayBusinessList(req, res, next) {
    business_1.default.find(function (err, businessesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessList = DisplayBusinessList;
function DisplayAddList(req, res, next) {
    res.render('index', { title: 'add Business List', page: 'edit', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddList = DisplayAddList;
function ProcessAddList(req, res, next) {
    let newBusiness = new business_1.default({
        "Name": req.body.username,
        "Number": req.body.number,
        "email": req.body.emailAddress
    });
    business_1.default.create(newBusiness, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}
exports.ProcessAddList = ProcessAddList;
;
//# sourceMappingURL=business-list.js.map