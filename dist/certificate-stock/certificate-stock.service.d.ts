import { CertificateStock } from './schema/certificate-stock.schema';
import { Model } from 'mongoose';
import { CreateCertificateStockDto } from './dto/create-certificate-stock.dto';
import { BlockCertificateStockDto } from './dto/block-certificate-stock.dto';
export declare class CertificateStockService {
    private readonly certificateStockModel;
    constructor(certificateStockModel: Model<CertificateStock>);
    findAll(filters: Partial<CertificateStock>, skip: number, take: number): Promise<CertificateStock[]>;
    create(createDto: CreateCertificateStockDto): Promise<CertificateStock[]>;
    blockCertificate(id: string, blockDto: BlockCertificateStockDto): Promise<CertificateStock>;
    changeStatus(id: string, status: string): Promise<CertificateStock>;
    countByStatus(): Promise<{
        total: number;
        totalActive: number;
        totalInactive: number;
        totalBlock: number;
    }>;
}
