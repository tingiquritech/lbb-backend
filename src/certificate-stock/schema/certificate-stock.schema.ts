import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CertificateStockStatusEnum } from '../enums/status';

@Schema({
  timestamps: true,
})
export class CertificateStock extends Document {
  @Prop({ unique: [true, 'Duplicate certificateNo'] })
  certificateNo: string;

  @Prop()
  userId: string;

  @Prop()
  status: CertificateStockStatusEnum;

  @Prop()
  remark: string;

  @Prop()
  createdDate: Date;
}

export const CertificateStockSchema =
  SchemaFactory.createForClass(CertificateStock);
