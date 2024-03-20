import { Controller, Delete, Get, Put, Post, Body, ValidationPipe, UsePipes, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    @Get()
    @HttpCode(HttpStatus.METHOD_NOT_ALLOWED)
    findAll(): string {
        return '';
    }

    @Get(':id')
    @HttpCode(HttpStatus.METHOD_NOT_ALLOWED)
    findOne(): string {
        return '';
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return createUserDto;
    }

    @Put(':id')
    @HttpCode(HttpStatus.METHOD_NOT_ALLOWED)
    update(): string {
        return '';
    }

    @Delete(':id')
    @HttpCode(HttpStatus.METHOD_NOT_ALLOWED)
    remove(): string {
        return '';
    }
}
