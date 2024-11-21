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
exports.CreateacctrestraintDto = void 0;
const class_validator_1 = require("class-validator");
class CreateacctrestraintDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter the data of start' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateacctrestraintDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter the data of end' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateacctrestraintDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter a narrative' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateacctrestraintDto.prototype, "narrative", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter a restraintType' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateacctrestraintDto.prototype, "restraintType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter a acctNo' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateacctrestraintDto.prototype, "acctNo", void 0);
exports.CreateacctrestraintDto = CreateacctrestraintDto;
//# sourceMappingURL=create.dto.js.map