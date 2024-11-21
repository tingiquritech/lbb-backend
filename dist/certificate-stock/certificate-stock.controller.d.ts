import { CertificateStockService } from './certificate-stock.service';
import { CertificateStock } from './schema/certificate-stock.schema';
import { CreateCertificateStockDto } from './dto/create-certificate-stock.dto';
import { BlockCertificateStockDto } from './dto/block-certificate-stock.dto';
export declare class CertificateStockController {
    private certificateStockService;
    constructor(certificateStockService: CertificateStockService);
    getAllData(filters?: Partial<CertificateStock>, skip?: number, take?: number): Promise<CertificateStock[]>;
    getCountByStatis(): Promise<{
        total: number;
        totalActive: number;
        totalInactive: number;
        totalBlock: number;
    }>;
    createData(createDto: CreateCertificateStockDto): Promise<CertificateStock[]>;
    updateMenu(id: string, blockDto: BlockCertificateStockDto): Promise<CertificateStock>;
    changeStatus(id: string, { status, }: {
        status: string;
    }): Promise<CertificateStock>;
}
