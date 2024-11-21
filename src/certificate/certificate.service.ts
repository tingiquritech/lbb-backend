import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Certificate } from './schema/certificate.schema';
import { Model } from 'mongoose';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { CertificateStatusEnum } from './enums/certificateStatus';
import { MOCK_TD_ACCOUNT_DATA } from './mockData/tdAccount';
import { BlockCertificateDto } from './dto/block-certificate.dto';

@Injectable()
export class CertificateService {
  constructor(
    @InjectModel(Certificate.name)
    private readonly certificateModel: Model<Certificate>,
  ) {}

  async findAll(
    filters: Partial<Certificate> = {},
    skip: number,
    take: number,
  ): Promise<Certificate[]> {
    const query = this.certificateModel.find();

    // Apply filtering criteria based on provided filters object
    if (Object.keys(filters).length > 0) {
      query.where(filters);
    }
    query.skip(skip).limit(take);
    // Populate the `menuOptions` field
    const result = await query.exec();

    return result;
  }

  async adminScanQr(certificateNo: string): Promise<Certificate | null> {
    const certificate = await this.certificateModel.findOne({ certificateNo });
    return certificate;
  }

  async userScanQr(certificateNo: string): Promise<Certificate | null> {
    const certificate = await this.certificateModel.findOne({ certificateNo });
    return certificate;
  }

  async getTdAccount(acctNo): Promise<any> {
    if (acctNo === '00000000000000000094') {
      return {
        _id: null,
        certificateNo: '',
        clientNo: MOCK_TD_ACCOUNT_DATA.details.clientNo,
        acctNo: MOCK_TD_ACCOUNT_DATA.details.acctNo,
        acctDesc: MOCK_TD_ACCOUNT_DATA.details.acctDesc,
        tdaRecPrincipalAmt: MOCK_TD_ACCOUNT_DATA.details.tdaRec.principalAmt,
        tdaRecMaturityDate: MOCK_TD_ACCOUNT_DATA.details.tdaRec.maturityDate,
        ccy: MOCK_TD_ACCOUNT_DATA.details.ccy,
        acctOpenDate: MOCK_TD_ACCOUNT_DATA.details.acctOpenDate,
        verifyBy: '',
        acctStatus: MOCK_TD_ACCOUNT_DATA.details
          .acctStatus as CertificateStatusEnum,
        dateOfUse: new Date(),
      };
    } else {
      return null;
    }
  }

  async create(createDto: CreateCertificateDto): Promise<Certificate> {
    const createdData = new this.certificateModel({
      ...createDto,
      remark: '',
      dateOfUse: new Date(),
    });
    const savedData = await createdData.save();

    return savedData;
  }

  async countByStatus(): Promise<{
    total: number;
    totalActive: number;
    totalAvailable: number;
  }> {
    const total = await this.certificateModel.countDocuments({});
    const activeCount = await this.certificateModel.countDocuments({
      acctStatus: CertificateStatusEnum.ACTIVE,
    });
    const availableCount = await this.certificateModel.countDocuments({
      acctStatus: CertificateStatusEnum.AVAILABLE,
    });

    return {
      total,
      totalActive: activeCount,
      totalAvailable: availableCount,
    };
  }

  async countFaultyCertificate(): Promise<{
    total: number;
    totalLoss: number;
    totalMistake: number;
  }> {
    const lossCount = await this.certificateModel.countDocuments({
      acctStatus: CertificateStatusEnum.LOSS,
    });
    const mistakeCount = await this.certificateModel.countDocuments({
      acctStatus: CertificateStatusEnum.MISTAKE,
    });

    return {
      total: lossCount + mistakeCount,
      totalLoss: lossCount,
      totalMistake: mistakeCount,
    };
  }

  async blockCertificate(
    id: string,
    blockDto: BlockCertificateDto,
  ): Promise<Certificate> {
    const updatedData = await this.certificateModel
      .findByIdAndUpdate(
        id,
        {
          ...blockDto,
        },
        { new: true },
      )
      .exec();

    if (!updatedData) {
      throw new NotFoundException('Certificate not found');
    }

    return updatedData;
  }
}
