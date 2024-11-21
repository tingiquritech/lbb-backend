import axios from "axios";
import { HttpException, HttpStatus } from "@nestjs/common";
const https = require('https');

export const GetCbsAcctdIDFromMiddleware = async (acctdId: string) => {
    try{

    const agent = new https.Agent({
        rejectUnauthorized: false // Disable certificate verification
    });

    const AcctdAccount = await axios({
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
            tdaRec_principalAmt: jsonObject.details?.tdaRec?.principalAmt || null,
            tdaRec_maturityDate: jsonObject.details?.tdaRec?.maturityDate || null,
            ccy: jsonObject.details.ccy,
            acctOpenDate: jsonObject.details.acctOpenDate,
            verifyBy: "null",
            acctStatus: jsonObject.details.acctStatus,
            dateOfUser: jsonObject.details.dateOfUser
        }
        return Formatdata || {}
    } else {
       return new HttpException({ message: 'error somthing from middleware or cbs api' }, HttpStatus.BAD_REQUEST)
    }
}catch(err){
    return new HttpException({ message: 'error somthing from middleware or cbs api' }, HttpStatus.BAD_REQUEST)

}
}
