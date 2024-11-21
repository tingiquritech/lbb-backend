import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { Certificate } from './schema/certificate.schema';
import { BlockCertificateDto } from './dto/block-certificate.dto';

@Controller('certificate')
export class CertificateController {
  constructor(private certificateService: CertificateService) {}

  @Get()
  async getAllData(
    @Query('filters') filters: Partial<Certificate> = {},
    @Query('skip') skip = 0,
    @Query('take') take = 10,
  ): Promise<Certificate[]> {
    return this.certificateService.findAll(filters, skip, take);
  }

  @Post()
  async createData(
    @Body() createDto: CreateCertificateDto,
  ): Promise<Certificate> {
    return this.certificateService.create(createDto);
  }

  @Get('/count-by-status')
  async getCountByStatis(): Promise<{
    total: number;
    totalActive: number;
    totalAvailable: number;
  }> {
    return this.certificateService.countByStatus();
  }

  @Get('/count-faulty-certificate')
  async getCountFaultyCertificate(): Promise<{
    total: number;
    totalLoss: number;
    totalMistake: number;
  }> {
    return this.certificateService.countFaultyCertificate();
  }

  @Get('/admin-scan-qr/:certificateNo')
  async adminScanCertificate(
    @Param('certificateNo') certificateNo: string,
  ): Promise<Certificate | null> {
    const certificate = await this.certificateService.adminScanQr(
      certificateNo,
    );
    return certificate;
  }

  @Get('/user-scan-qr/:certificateNo')
  async userScanCertificate(
    @Param('certificateNo') certificateNo: string,
  ): Promise<Certificate | null> {
    const certificate = await this.certificateService.userScanQr(certificateNo);
    return certificate;
  }

  @Get('/accttd/:acctNo')
  async getCertificateById(
    @Param('acctNo') acctNo: string,
  ): Promise<Certificate | null> {
    return this.certificateService.getTdAccount(acctNo);
  }

  @Put('/:id/block')
  async updateMenu(
    @Param('id') id: string,
    @Body() blockDto: BlockCertificateDto,
  ): Promise<Certificate> {
    return this.certificateService.blockCertificate(id, blockDto);
  }
}
