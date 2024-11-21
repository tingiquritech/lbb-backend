"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const certificate_schema_1 = require("./schema/certificate.schema");
const mongoose_2 = require("mongoose");
const certificateStatus_1 = require("./enums/certificateStatus");
const tdAccount_1 = require("./mockData/tdAccount");
let CertificateService = class CertificateService {
    constructor(certificateModel) {
        this.certificateModel = certificateModel;
    }
    async findAll(filters = {}, skip, take) {
        const query = this.certificateModel.find();
        if (Object.keys(filters).length > 0) {
            query.where(filters);
        }
        query.skip(skip).limit(take);
        const result = await query.exec();
        return result;
    }
    async adminScanQr(certificateNo) {
        const certificate = await this.certificateModel.findOne({ certificateNo });
        return certificate;
    }
    async userScanQr(certificateNo) {
        const certificate = await this.certificateModel.findOne({ certificateNo });
        return certificate;
    }
    async getTdAccount(acctNo) {
        if (acctNo === '00000000000000000094') {
            return {
                _id: null,
                certificateNo: '',
                clientNo: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.clientNo,
                acctNo: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.acctNo,
                acctDesc: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.acctDesc,
                tdaRecPrincipalAmt: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.tdaRec.principalAmt,
                tdaRecMaturityDate: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.tdaRec.maturityDate,
                ccy: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.ccy,
                acctOpenDate: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details.acctOpenDate,
                verifyBy: '',
                acctStatus: tdAccount_1.MOCK_TD_ACCOUNT_DATA.details
                    .acctStatus,
                dateOfUse: new Date(),
            };
        }
        else {
            return null;
        }
    }
    async create(createDto) {
        const createdData = new this.certificateModel(Object.assign(Object.assign({}, createDto), { remark: '', dateOfUse: new Date() }));
        const savedData = await createdData.save();
        return savedData;
    }
    async countByStatus() {
        const total = await this.certificateModel.countDocuments({});
        const activeCount = await this.certificateModel.countDocuments({
            acctStatus: certificateStatus_1.CertificateStatusEnum.ACTIVE,
        });
        const availableCount = await this.certificateModel.countDocuments({
            acctStatus: certificateStatus_1.CertificateStatusEnum.AVAILABLE,
        });
        return {
            total,
            totalActive: activeCount,
            totalAvailable: availableCount,
        };
    }
    async countFaultyCertificate() {
        const lossCount = await this.certificateModel.countDocuments({
            acctStatus: certificateStatus_1.CertificateStatusEnum.LOSS,
        });
        const mistakeCount = await this.certificateModel.countDocuments({
            acctStatus: certificateStatus_1.CertificateStatusEnum.MISTAKE,
        });
        return {
            total: lossCount + mistakeCount,
            totalLoss: lossCount,
            totalMistake: mistakeCount,
        };
    }
    async blockCertificate(id, blockDto) {
        console.log(blockDto);
        const updatedData = await this.certificateModel
            .findByIdAndUpdate(id, Object.assign({}, blockDto), { new: true })
            .exec();
        if (!updatedData) {
            throw new common_1.NotFoundException('Certificate not found');
        }
        return updatedData;
    }
};
CertificateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(certificate_schema_1.Certificate.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CertificateService);
exports.CertificateService = CertificateService;
//# sourceMappingURL=certificate.service.js.map