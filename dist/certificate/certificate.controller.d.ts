import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { Certificate } from './schema/certificate.schema';
import { BlockCertificateDto } from './dto/block-certificate.dto';
export declare class CertificateController {
    private certificateService;
    constructor(certificateService: CertificateService);
    getAllData(filters?: Partial<Certificate>, skip?: number, take?: number): Promise<Certificate[]>;
    createData(createDto: CreateCertificateDto): Promise<Certificate>;
    getCountByStatis(): Promise<{
        total: number;
        totalActive: number;
        totalAvailable: number;
    }>;
    getCountFaultyCertificate(): Promise<{
        total: number;
        totalLoss: number;
        totalMistake: number;
    }>;
    adminScanCertificate(certificateNo: string): Promise<Certificate | null>;
    userScanCertificate(certificateNo: string): Promise<Certificate | null>;
    getCertificateById(acctNo: string): Promise<Certificate | null>;
    updateMenu(id: string, blockDto: BlockCertificateDto): Promise<Certificate>;
}
