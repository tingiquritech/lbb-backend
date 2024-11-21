"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCbsAcctdIDFromMiddleware = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const https = require('https');
const GetCbsAcctdIDFromMiddleware = async (acctdId) => {
    var _a, _b, _c, _d;
    try {
        const agent = new https.Agent({
            rejectUnauthorized: false
        });
        const AcctdAccount = await (0, axios_1.default)({
            baseURL: `${process.env.MIDDLEWARE_URL}/api/v1/cbs/td-account-by-accttd?accttd=${acctdId}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-skip-auth': true
            },
            httpsAgent: agent
        });
        if (AcctdAccount.data.status === '200') {
            const jsonObject = JSON.parse(AcctdAccount.data.data);
            const Formatdata = {
                certificateNo: "null",
                clientNo: jsonObject.details.clientNo,
                acctNo: jsonObject.details.acctNo,
                acctDesc: jsonObject.details.acctDesc,
                tdaRec_principalAmt: ((_b = (_a = jsonObject.details) === null || _a === void 0 ? void 0 : _a.tdaRec) === null || _b === void 0 ? void 0 : _b.principalAmt) || null,
                tdaRec_maturityDate: ((_d = (_c = jsonObject.details) === null || _c === void 0 ? void 0 : _c.tdaRec) === null || _d === void 0 ? void 0 : _d.maturityDate) || null,
                ccy: jsonObject.details.ccy,
                acctOpenDate: jsonObject.details.acctOpenDate,
                verifyBy: "null",
                acctStatus: jsonObject.details.acctStatus,
                dateOfUser: jsonObject.details.dateOfUser
            };
            return Formatdata || {};
        }
        else {
            return new common_1.HttpException({ message: 'error somthing from middleware or cbs api' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    catch (err) {
        return new common_1.HttpException({ message: 'error somthing from middleware or cbs api' }, common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.GetCbsAcctdIDFromMiddleware = GetCbsAcctdIDFromMiddleware;
//# sourceMappingURL=td-account.js.map