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
exports.CbsAccountController = void 0;
const common_1 = require("@nestjs/common");
const cbs_account_service_1 = require("./cbs-account.service");
const create_dto_1 = require("./dto/create.dto");
let CbsAccountController = class CbsAccountController {
    constructor(cbsAccountService) {
        this.cbsAccountService = cbsAccountService;
    }
    async getAllMenus(acctdId) {
        return await this.cbsAccountService.getCbsAcoount(acctdId);
    }
    async createAcctrestraint(body) {
        return await this.cbsAccountService.createAcctrestraint(body);
    }
};
__decorate([
    (0, common_1.Get)('/dep/accttd'),
    __param(0, (0, common_1.Query)('acctdId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CbsAccountController.prototype, "getAllMenus", null);
__decorate([
    (0, common_1.Post)('/dep/acctrestraint'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateacctrestraintDto]),
    __metadata("design:returntype", Promise)
], CbsAccountController.prototype, "createAcctrestraint", null);
CbsAccountController = __decorate([
    (0, common_1.Controller)('cbs-account'),
    __metadata("design:paramtypes", [cbs_account_service_1.CbsAccountService])
], CbsAccountController);
exports.CbsAccountController = CbsAccountController;
//# sourceMappingURL=cbs-account.controller.js.map