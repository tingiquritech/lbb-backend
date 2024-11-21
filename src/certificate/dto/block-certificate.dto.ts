import { CertificateStatusEnum } from '../enums/certificateStatus';

export class BlockCertificateDto {
  remark: string;
  acctStatus: CertificateStatusEnum;
}
