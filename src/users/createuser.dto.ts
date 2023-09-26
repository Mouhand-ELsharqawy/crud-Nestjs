import { IsString,IsEmail, IsNumber, IsPhoneNumber } from "class-validator";
export class CreateUserDto{
    @IsString()
    readonly name:string;
    @IsString()
    readonly surname:string;
    // @IsNumber()
    readonly age:number;
    @IsEmail({},{message:"write acorrect email like that example@gmail.com"})
    readonly email:string;
    // @IsPhoneNumber()
    readonly phonenumber:string;
    @IsString()
    readonly city:string;
    @IsString()
    readonly address:string;
}