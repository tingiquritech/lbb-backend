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
exports.CertificateController = void 0;
const common_1 = require("@nestjs/common");
const certificate_service_1 = require("./certificate.service");
const create_certificate_dto_1 = require("./dto/create-certificate.dto");
const block_certificate_dto_1 = require("./dto/block-certificate.dto");
let CertificateController = class CertificateController {
    constructor(certificateService) {
        this.certificateService = certificateService;
    }
    async getAllData(filters = {}, skip = 0, take = 10) {
        return this.certificateService.findAll(filters, skip, take);
    }
    async createData(createDto) {
        return this.certificateService.create(createDto);
    }
    async getCountByStatis() {
        return this.certificateService.countByStatus();
    }
    async getCountFaultyCertificate() {
        return this.certificateService.countFaultyCertificate();
    }
    async adminScanCertificate(certificateNo) {
        const certificate = await this.certificateService.adminScanQr(certificateNo);
        return certificate;
    }
    async userScanCertificate(certificateNo) {
        const certificate = await this.certificateService.userScanQr(certificateNo);
        return certificate;
    }
    async getCertificateById(acctNo) {
        return this.certificateService.getTdAccount(acctNo);
    }
    async updateMenu(id, blockDto) {
        return this.certificateService.blockCertificate(id, blockDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('filters')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Query)('take')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getAllData", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_certificate_dto_1.CreateCertificateDto]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "createData", null);
__decorate([
    (0, common_1.Get)('/count-by-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getCountByStatis", null);
__decorate([
    (0, common_1.Get)('/count-faulty-certificate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getCountFaultyCertificate", null);
__decorate([
    (0, common_1.Get)('/admin-scan-qr/:certificateNo'),
    __param(0, (0, common_1.Param)('certificateNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "adminScanCertificate", null);
__decorate([
    (0, common_1.Get)('/user-scan-qr/:certificateNo'),
    __param(0, (0, common_1.Param)('certificateNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "userScanCertificate", null);
__decorate([
    (0, common_1.Get)('/accttd/:acctNo'),
    __param(0, (0, common_1.Param)('acctNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "getCertificateById", null);
__decorate([
    (0, common_1.Put)('/:id/block'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, block_certificate_dto_1.BlockCertificateDto]),
    __metadata("design:returntype", Promise)
], CertificateController.prototype, "updateMenu", null);
CertificateController = __decorate([
    (0, common_1.Controller)('certificate'),
    __metadata("design:paramtypes", [certificate_service_1.CertificateService])
], CertificateController);
exports.CertificateController = CertificateController;
//# sourceMappingURL=certificate.controller.js.map