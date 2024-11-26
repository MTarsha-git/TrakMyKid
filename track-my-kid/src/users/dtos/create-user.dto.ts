export class CreateUserDto{
    readonly firstName: string;
    lastName: string;
    email: string;
    password: string;
    picture: string;
    phoneNumber: string;
    city: string;
    street: string;
    birthDay: Date;
    roleId: number;
}