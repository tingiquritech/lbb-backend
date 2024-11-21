"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAcctrestraintFromMiddleware = void 0;
const axios_1 = require("axios");
const common_1 = require("@nestjs/common");
const https = require('https');
const CreateAcctrestraintFromMiddleware = async (body) => {
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });
    const AcctdAccount = await (0, axios_1.default)({
        baseURL: `${process.env.MIDDLEWARE_URL}/api/v1/cbs/create-information-only-restraints`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-skip-auth': true,
        },
        data: body,
        httpsAgent: agent,
    });
    if (AcctdAccount.data.status === '200') {
        return AcctdAccount.data.data || {};
    }
    else {
        new common_1.HttpException({ message: 'error somthing from middleware or cbs api' }, common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.CreateAcctrestraintFromMiddleware = CreateAcctrestraintFromMiddleware;
//# sourceMappingURL=acctrestraint.js.map