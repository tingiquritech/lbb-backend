import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    findAll(filters?: Partial<User>): Promise<User[]>;
    signUp(signUpDto: SignUpDto): Promise<{
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    getUserByToken(token: string): Promise<User | undefined>;
    deleteById(id: string): Promise<User>;
    updateUserById(id: string, updateDto: Partial<User>): Promise<User>;
}
