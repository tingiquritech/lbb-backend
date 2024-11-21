import { CertificateStatusEnum } from '../enums/certificateStatus';
export declare class CreateCertificateDto {
    certificateNo: string;
    clientNo: string;
    acctNo: string;
    acctDesc: string;
    tdaRecPrincipalAmt: number;
    tdaRecMaturityDate: string;
    ccy: string;
    acctOpenDate: string;
    verifyBy: string;
    acctStatus: CertificateStatusEnum;
    dateOfUse: Date;
}
