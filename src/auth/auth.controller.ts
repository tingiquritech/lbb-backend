import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/find-all')
  async getAllMenus(
    @Query('filters') filters: Partial<User> = {}, // Optional filtering
  ): Promise<User[]> {
    return this.authService.findAll(filters);
  }

  @Get('/get-user-by-token')
  @UseGuards(AuthGuard()) // Apply JWT Auth Guard
  async getUserByToken(
    @Headers('authorization') authorization: string,
  ): Promise<User | undefined> {
    if (!authorization) {
      throw new HttpException(
        'Authorization header is missing',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token: string = authorization.replace('Bearer ', '');

    return this.authService.getUserByToken(token);
  }

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ accessToken: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }

  @Delete(':id')
  async deleteMenu(@Param('id') id: string): Promise<User> {
    return this.authService.deleteById(id);
  }
}
