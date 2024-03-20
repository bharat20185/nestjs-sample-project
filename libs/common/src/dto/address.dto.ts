import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  address1: string;

  @IsString()
  @IsOptional()
  address2: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  zipcode: string;
}