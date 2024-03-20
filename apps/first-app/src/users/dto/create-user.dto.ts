import { AddressDto } from '@app/common/dto/address.dto';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @ValidateNested()
    @Type(() => AddressDto)
    address: AddressDto
}