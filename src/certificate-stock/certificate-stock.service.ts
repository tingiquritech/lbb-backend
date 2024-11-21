import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CertificateStock } from './schema/certificate-stock.schema';
import { Model } from 'mongoose';
import { CreateCertificateStockDto } from './dto/create-certificate-stock.dto';
import { CertificateStockStatusEnum } from './enums/status';
import { BlockCertificateStockDto } from './dto/block-certificate-stock.dto';

@Injectable()
export class CertificateStockService {
  constructor(
    @InjectModel(CertificateStock.name)
    private readonly certificateStockModel: Model<CertificateStock>,
  ) {}

  async findAll(
    filters: Partial<CertificateStock> = {},
    skip: number,
    take: number,
  ): Promise<CertificateStock[]> {
    const query = this.certificateStockModel.find();

    // Apply filtering criteria based on provided filters object
    if (Object.keys(filters).length > 0) {
      query.where(filters);
    }
    query.skip(skip).limit(take);
    // Populate the `menuOptions` field
    const result = await query.exec();

    return result;
  }

  async create(
    createDto: CreateCertificateStockDto,
  ): Promise<CertificateStock[]> {
    for (const certificateNo of createDto.certificateNo) {
      const existingCertificate = await this.certificateStockModel.findOne({
        certificateNo,
      });

      if (existingCertificate) {
        throw new HttpException(
          `Certificate number ${certificateNo} already exists`,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    const result: CertificateStock[] = [];
    const createdDate = new Date();
    for (let i = 0; i < createDto.certificateNo.length; i++) {
      const createdData = new this.certificateStockModel({
        certificateNo: createDto.certificateNo[i]?.trim(),
        userId: createDto.userId,
        createdDate: createdDate,
        remark: '',
        status: CertificateStockStatusEnum.ACTIVE,
      });
      const savedData = await createdData.save();
      result.push(savedData);
    }

    return result;
  }

  async blockCertificate(
    id: string,
    blockDto: BlockCertificateStockDto,
  ): Promise<CertificateStock> {
    const updatedData = await this.certificateStockModel
      .findByIdAndUpdate(
        id,
        {
          ...blockDto,
          status: CertificateStockStatusEnum.BLOCK,
        },
        { new: true },
      )
      .exec();

    if (!updatedData) {
      throw new NotFoundException('Certificate not found');
    }

    return updatedData;
  }

  async changeStatus(id: string, status: string): Promise<CertificateStock> {
    const updatedData = await this.certificateStockModel
      .findByIdAndUpdate(
        id,
        {
          status: status,
        },
        { new: true },
      )
      .exec();

    if (!updatedData) {
      throw new NotFoundException('Certificate not found');
    }

    return updatedData;
  }

  async countByStatus(): Promise<{
    total: number;
    totalActive: number;
    totalInactive: number;
    totalBlock: number;
  }> {
    const total = await this.certificateStockModel.countDocuments({});
    const activeCount = await this.certificateStockModel.countDocuments({
      status: CertificateStockStatusEnum.ACTIVE,
    });
    const inactiveCount = await this.certificateStockModel.countDocuments({
      status: CertificateStockStatusEnum.INACTIVE,
    });
    const blockCount = await this.certificateStockModel.countDocuments({
      status: CertificateStockStatusEnum.BLOCK,
    });

    return {
      total,
      totalActive: activeCount,
      totalInactive: inactiveCount,
      totalBlock: blockCount,
    };
  }
}
