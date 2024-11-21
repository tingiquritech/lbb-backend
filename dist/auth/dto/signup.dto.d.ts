import { RoleEnum } from '../enums/role';
export declare class SignUpDto {
    readonly username: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly role: RoleEnum;
}
