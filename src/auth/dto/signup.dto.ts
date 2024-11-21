import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { RoleEnum } from '../enums/role';

export class SignUpDto {
  @IsNotEmpty({ message: 'Please enter a username' })
  @IsString()
  readonly username: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty({ message: 'Please enter a role' })
  @IsString()
  readonly role: RoleEnum;
}
