import { CreateacctrestraintDto } from './dto/create.dto';
export declare class CbsAccountService {
    getCbsAcoount(acctdId: string): Promise<object>;
    createAcctrestraint(body: CreateacctrestraintDto): Promise<string>;
}
