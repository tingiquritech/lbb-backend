import { CbsAccountService } from './cbs-account.service';
import { CreateacctrestraintDto } from './dto/create.dto';
export declare class CbsAccountController {
    private cbsAccountService;
    constructor(cbsAccountService: CbsAccountService);
    getAllMenus(acctdId: Partial<string>): Promise<object>;
    createAcctrestraint(body: CreateacctrestraintDto): Promise<string>;
}
