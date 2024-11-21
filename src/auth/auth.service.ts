import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async findAll(filters: Partial<User> = {}): Promise<User[]> {
    const query = this.userModel.find();

    // Apply filtering criteria based on provided filters object
    if (Object.keys(filters).length > 0) {
      query.where(filters);
    }

    const data = await query.exec();
    return data;
  }

  async signUp(signUpDto: SignUpDto): Promise<{ accessToken: string }> {
    const { username } = signUpDto;

    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new HttpException('Duplicate Username', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
    const user = await this.userModel.create({
      ...signUpDto,
      password: hashedPassword,
    });
    const token = this.jwtService.sign({ id: user._id });

    return { accessToken: token };
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { username, password } = loginDto;

    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('This Username does not exist');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const accessToken = this.jwtService.sign({ id: user._id });

    return { accessToken };
  }

  async getUserByToken(token: string): Promise<User | undefined> {
    const decoded = this.jwtService.verify(token);

    // Find user by the decoded ID from the token
    const user = await this.userModel.findById(decoded.id);
    return user;
  }

  async deleteById(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }

  async updateUserById(id: string, updateDto: Partial<User>): Promise<User> {
    const existingUser = await this.userModel.findById(id).exec();
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    // Update the user's properties with the provided values
    Object.assign(existingUser, updateDto);
    const updatedUser = await existingUser.save();
    return updatedUser;
  }
}
