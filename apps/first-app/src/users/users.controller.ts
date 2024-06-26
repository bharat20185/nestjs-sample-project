import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  HttpCode,
  HttpStatus,
  Param,
  HttpException,
  Logger,
  ParseIntPipe
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { TimestampDatePipe } from '@app/common/pipes/timestamp-date.pipe';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): CreateUserDto[] {
    this.logger.log('This is a log message');
    this.logger.warn('This is a warning message');
    this.logger.error('This is an error message');
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): CreateUserDto {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.usersService.findOne(+id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createUserDto: CreateUserDto, @Body('createdAt', TimestampDatePipe) createdAt: Date): CreateUserDto {
    console.log("createdAt", typeof createdAt, createdAt)
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto,
  ): CreateUserDto {
    const user = this.usersService.findOne(+id);
    if (!user) {
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
