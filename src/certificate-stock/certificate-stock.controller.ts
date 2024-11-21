import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CertificateStockService } from './certificate-stock.service';
import { CertificateStock } from './schema/certificate-stock.schema';
import { CreateCertificateStockDto } from './dto/create-certificate-stock.dto';
import { BlockCertificateStockDto } from './dto/block-certificate-stock.dto';

@Controller('certificate-stock')
export class CertificateStockController {
  constructor(private certificateStockService: CertificateStockService) {}

  @Get()
  async getAllData(
    @Query('filters') filters: Partial<CertificateStock> = {},
    @Query('skip') skip = 0,
    @Query('take') take = 10,
  ): Promise<CertificateStock[]> {
    return this.certificateStockService.findAll(filters, skip, take);
  }

  @Get('/count-by-status')
  async getCountByStatis(): Promise<{
    total: number;
    totalActive: number;
    totalInactive: number;
    totalBlock: number;
  }> {
    return this.certificateStockService.countByStatus();
  }

  @Post()
  async createData(
    @Body() createDto: CreateCertificateStockDto,
  ): Promise<CertificateStock[]> {
    return this.certificateStockService.create(createDto);
  }

  @Put('/:id/block')
  async updateMenu(
    @Param('id') id: string,
    @Body() blockDto: BlockCertificateStockDto,
  ): Promise<CertificateStock> {
    return this.certificateStockService.blockCertificate(id, blockDto);
  }

  @Put('/:id/change-status')
  async changeStatus(
    @Param('id') id: string,
    @Body()
    {
      status,
    }: {
      status: string;
    },
  ): Promise<CertificateStock> {
    return this.certificateStockService.changeStatus(id, status);
  }
}
