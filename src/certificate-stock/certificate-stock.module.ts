import { Module } from '@nestjs/common';
import { CertificateStockController } from './certificate-stock.controller';
import { CertificateStockService } from './certificate-stock.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateStockSchema } from './schema/certificate-stock.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CertificateStock', schema: CertificateStockSchema },
    ]),
  ],
  controllers: [CertificateStockController],
  providers: [CertificateStockService],
})
export class CertificateStockModule {}
