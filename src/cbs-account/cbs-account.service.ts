import { Injectable } from '@nestjs/common';
import { GetCbsAcctdIDFromMiddleware } from '../connect-middleware/td-account';
import { CreateacctrestraintDto } from './dto/create.dto';
import { CreateAcctrestraintFromMiddleware } from '../connect-middleware/acctrestraint';

@Injectable()
export class CbsAccountService {
    async getCbsAcoount(acctdId: string): Promise<object> {
        return await GetCbsAcctdIDFromMiddleware(acctdId)
    }

    async createAcctrestraint(body: CreateacctrestraintDto): Promise<string> {
        await CreateAcctrestraintFromMiddleware(body)
        return 'done'
    }
}
