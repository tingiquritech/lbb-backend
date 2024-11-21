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
exports.CertificateStockController = void 0;
const common_1 = require("@nestjs/common");
const certificate_stock_service_1 = require("./certificate-stock.service");
const create_certificate_stock_dto_1 = require("./dto/create-certificate-stock.dto");
const block_certificate_stock_dto_1 = require("./dto/block-certificate-stock.dto");
let CertificateStockController = class CertificateStockController {
    constructor(certificateStockService) {
        this.certificateStockService = certificateStockService;
    }
    async getAllData(filters = {}, skip = 0, take = 10) {
        return this.certificateStockService.findAll(filters, skip, take);
    }
    async getCountByStatis() {
        return this.certificateStockService.countByStatus();
    }
    async createData(createDto) {
        return this.certificateStockService.create(createDto);
    }
    async updateMenu(id, blockDto) {
        return this.certificateStockService.blockCertificate(id, blockDto);
    }
    async changeStatus(id, { status, }) {
        return this.certificateStockService.changeStatus(id, status);
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
], CertificateStockController.prototype, "getAllData", null);
__decorate([
    (0, common_1.Get)('/count-by-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CertificateStockController.prototype, "getCountByStatis", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_certificate_stock_dto_1.CreateCertificateStockDto]),
    __metadata("design:returntype", Promise)
], CertificateStockController.prototype, "createData", null);
__decorate([
    (0, common_1.Put)('/:id/block'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, block_certificate_stock_dto_1.BlockCertificateStockDto]),
    __metadata("design:returntype", Promise)
], CertificateStockController.prototype, "updateMenu", null);
__decorate([
    (0, common_1.Put)('/:id/change-status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CertificateStockController.prototype, "changeStatus", null);
CertificateStockController = __decorate([
    (0, common_1.Controller)('certificate-stock'),
    __metadata("design:paramtypes", [certificate_stock_service_1.CertificateStockService])
], CertificateStockController);
exports.CertificateStockController = CertificateStockController;
//# sourceMappingURL=certificate-stock.controller.js.map