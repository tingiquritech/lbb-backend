import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CertificateStatusEnum } from '../enums/certificateStatus';

@Schema({
  timestamps: true,
})
export class Certificate extends Document {
  @Prop({ unique: [true, 'Duplicate certificateNo'] })
  certificateNo: string;

  @Prop()
  clientNo: string;

  @Prop()
  acctNo: string;

  @Prop()
  acctDesc: string;

  @Prop()
  tdaRecPrincipalAmt: number;

  @Prop()
  tdaRecMaturityDate: string;

  @Prop()
  ccy: string;

  @Prop()
  acctOpenDate: string;

  @Prop()
  verifyBy: string;

  @Prop()
  remark: string;

  @Prop()
  acctStatus: CertificateStatusEnum;

  @Prop()
  dateOfUse: Date;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
