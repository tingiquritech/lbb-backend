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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStockSchema = exports.CertificateStock = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const status_1 = require("../enums/status");
let CertificateStock = class CertificateStock extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ unique: [true, 'Duplicate certificateNo'] }),
    __metadata("design:type", String)
], CertificateStock.prototype, "certificateNo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CertificateStock.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CertificateStock.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CertificateStock.prototype, "remark", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], CertificateStock.prototype, "createdDate", void 0);
CertificateStock = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], CertificateStock);
exports.CertificateStock = CertificateStock;
exports.CertificateStockSchema = mongoose_1.SchemaFactory.createForClass(CertificateStock);
//# sourceMappingURL=certificate-stock.schema.js.map