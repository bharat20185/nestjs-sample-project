import { AddressDto } from '@app/common/dto/address.dto';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto
}