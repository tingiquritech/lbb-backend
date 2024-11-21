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
exports.CertificateStockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const certificate_stock_schema_1 = require("./schema/certificate-stock.schema");
const mongoose_2 = require("mongoose");
const status_1 = require("./enums/status");
let CertificateStockService = class CertificateStockService {
    constructor(certificateStockModel) {
        this.certificateStockModel = certificateStockModel;
    }
    async findAll(filters = {}, skip, take) {
        const query = this.certificateStockModel.find();
        if (Object.keys(filters).length > 0) {
            query.where(filters);
        }
        query.skip(skip).limit(take);
        const result = await query.exec();
        return result;
    }
    async create(createDto) {
        var _a;
        for (const certificateNo of createDto.certificateNo) {
            const existingCertificate = await this.certificateStockModel.findOne({
                certificateNo,
            });
            if (existingCertificate) {
                throw new common_1.HttpException(`Certificate number ${certificateNo} already exists`, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        const result = [];
        const createdDate = new Date();
        for (let i = 0; i < createDto.certificateNo.length; i++) {
            const createdData = new this.certificateStockModel({
                certificateNo: (_a = createDto.certificateNo[i]) === null || _a === void 0 ? void 0 : _a.trim(),
                userId: createDto.userId,
                createdDate: createdDate,
                remark: '',
                status: status_1.CertificateStockStatusEnum.ACTIVE,
            });
            const savedData = await createdData.save();
            result.push(savedData);
        }
        return result;
    }
    async blockCertificate(id, blockDto) {
        const updatedData = await this.certificateStockModel
            .findByIdAndUpdate(id, Object.assign(Object.assign({}, blockDto), { status: status_1.CertificateStockStatusEnum.BLOCK }), { new: true })
            .exec();
        if (!updatedData) {
            throw new common_1.NotFoundException('Certificate not found');
        }
        return updatedData;
    }
    async changeStatus(id, status) {
        const updatedData = await this.certificateStockModel
            .findByIdAndUpdate(id, {
            status: status,
        }, { new: true })
            .exec();
        if (!updatedData) {
            throw new common_1.NotFoundException('Certificate not found');
        }
        return updatedData;
    }
    async countByStatus() {
        const total = await this.certificateStockModel.countDocuments({});
        const activeCount = await this.certificateStockModel.countDocuments({
            status: status_1.CertificateStockStatusEnum.ACTIVE,
        });
        const inactiveCount = await this.certificateStockModel.countDocuments({
            status: status_1.CertificateStockStatusEnum.INACTIVE,
        });
        const blockCount = await this.certificateStockModel.countDocuments({
            status: status_1.CertificateStockStatusEnum.BLOCK,
        });
        return {
            total,
            totalActive: activeCount,
            totalInactive: inactiveCount,
            totalBlock: blockCount,
        };
    }
};
CertificateStockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(certificate_stock_schema_1.CertificateStock.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CertificateStockService);
exports.CertificateStockService = CertificateStockService;
//# sourceMappingURL=certificate-stock.service.js.map