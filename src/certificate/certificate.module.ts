import { Module } from '@nestjs/common';
import { CertificateController } from './certificate.controller';
import { CertificateService } from './certificate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CertificateSchema } from './schema/certificate.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Certificate', schema: CertificateSchema },
    ]),
  ],
  controllers: [CertificateController],
  providers: [CertificateService],
})
export class CertificateModule {}
