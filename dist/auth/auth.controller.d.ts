import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getAllMenus(filters?: Partial<User>): Promise<User[]>;
    getUserByToken(authorization: string): Promise<User | undefined>;
    signUp(signUpDto: SignUpDto): Promise<{
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
    }>;
    deleteMenu(id: string): Promise<User>;
}
