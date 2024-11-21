"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStockModule = void 0;
const common_1 = require("@nestjs/common");
const certificate_stock_controller_1 = require("./certificate-stock.controller");
const certificate_stock_service_1 = require("./certificate-stock.service");
const mongoose_1 = require("@nestjs/mongoose");
const certificate_stock_schema_1 = require("./schema/certificate-stock.schema");
let CertificateStockModule = class CertificateStockModule {
};
CertificateStockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'CertificateStock', schema: certificate_stock_schema_1.CertificateStockSchema },
            ]),
        ],
        controllers: [certificate_stock_controller_1.CertificateStockController],
        providers: [certificate_stock_service_1.CertificateStockService],
    })
], CertificateStockModule);
exports.CertificateStockModule = CertificateStockModule;
//# sourceMappingURL=certificate-stock.module.js.map