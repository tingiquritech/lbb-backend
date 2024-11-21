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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async findAll(filters = {}) {
        const query = this.userModel.find();
        if (Object.keys(filters).length > 0) {
            query.where(filters);
        }
        const data = await query.exec();
        return data;
    }
    async signUp(signUpDto) {
        const { username } = signUpDto;
        const existingUser = await this.userModel.findOne({ username });
        if (existingUser) {
            throw new common_1.HttpException('Duplicate Username', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
        const user = await this.userModel.create(Object.assign(Object.assign({}, signUpDto), { password: hashedPassword }));
        const token = this.jwtService.sign({ id: user._id });
        return { accessToken: token };
    }
    async login(loginDto) {
        const { username, password } = loginDto;
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new common_1.UnauthorizedException('This Username does not exist');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const accessToken = this.jwtService.sign({ id: user._id });
        return { accessToken };
    }
    async getUserByToken(token) {
        const decoded = this.jwtService.verify(token);
        const user = await this.userModel.findById(decoded.id);
        return user;
    }
    async deleteById(id) {
        const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
        if (!deletedUser) {
            throw new common_1.NotFoundException('User not found');
        }
        return deletedUser;
    }
    async updateUserById(id, updateDto) {
        const existingUser = await this.userModel.findById(id).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException('User not found');
        }
        Object.assign(existingUser, updateDto);
        const updatedUser = await existingUser.save();
        return updatedUser;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map