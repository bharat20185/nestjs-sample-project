import { Controller, Delete, Get, Put, Post, Body, ValidationPipe, UsePipes, HttpCode, HttpStatus, Param, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()    
    findAll(): CreateUserDto[] {
        return this.usersService.findAll();
    }

    @Get(':id')    
    findOne(@Param('id') id: string): CreateUserDto {
        const user = this.usersService.findOne(+id);
        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return this.usersService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createUserDto: CreateUserDto): CreateUserDto {
        const user = this.usersService.findOne(+id);
        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return this.usersService.update(+id, createUserDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string): string {
        return this.usersService.remove(+id);
    }
}
