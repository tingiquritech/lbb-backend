import { Certificate } from './schema/certificate.schema';
import { Model } from 'mongoose';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { BlockCertificateDto } from './dto/block-certificate.dto';
export declare class CertificateService {
    private readonly certificateModel;
    constructor(certificateModel: Model<Certificate>);
    findAll(filters: Partial<Certificate>, skip: number, take: number): Promise<Certificate[]>;
    adminScanQr(certificateNo: string): Promise<Certificate | null>;
    userScanQr(certificateNo: string): Promise<Certificate | null>;
    getTdAccount(acctNo: any): Promise<any>;
    create(createDto: CreateCertificateDto): Promise<Certificate>;
    countByStatus(): Promise<{
        total: number;
        totalActive: number;
        totalAvailable: number;
    }>;
    countFaultyCertificate(): Promise<{
        total: number;
        totalLoss: number;
        totalMistake: number;
    }>;
    blockCertificate(id: string, blockDto: BlockCertificateDto): Promise<Certificate>;
}
