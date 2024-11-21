/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document } from 'mongoose';
import { CertificateStatusEnum } from '../enums/certificateStatus';
export declare class Certificate extends Document {
    certificateNo: string;
    clientNo: string;
    acctNo: string;
    acctDesc: string;
    tdaRecPrincipalAmt: number;
    tdaRecMaturityDate: string;
    ccy: string;
    acctOpenDate: string;
    verifyBy: string;
    remark: string;
    acctStatus: CertificateStatusEnum;
    dateOfUse: Date;
}
export declare const CertificateSchema: import("mongoose").Schema<Certificate, import("mongoose").Model<Certificate, any, any, any, Document<unknown, any, Certificate> & Certificate & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificate, Document<unknown, {}, import("mongoose").FlatRecord<Certificate>> & import("mongoose").FlatRecord<Certificate> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
