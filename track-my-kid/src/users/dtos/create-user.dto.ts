import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    readonly firstName: string;
    @IsString()
    readonly lastName: string;
    @IsEmail()
    readonly email: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly picture: string;
    @IsString()
    readonly phoneNumber: string;
    @IsString()
    readonly city: string;
    @IsString()
    readonly street: string;
    //@IsDate()
    @IsString()
    readonly birthDay: string;
    @IsNumber()
    readonly roleId: number;
}