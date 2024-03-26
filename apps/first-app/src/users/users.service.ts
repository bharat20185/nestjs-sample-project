import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    users = new Map<number, CreateUserDto>();

    findAll(): CreateUserDto[] {
        return Array.from(this.users.values());
    }

    findOne(id: number): CreateUserDto {
        return this.users.get(id);
    }

    create(user: CreateUserDto): CreateUserDto {
        let lastId = this.users.size > 0 ? Array.from(this.users).at(-1)[0] : 0;
        const newUser = {id: lastId + 1, ...user};
        this.users.set(lastId + 1, newUser);
        return newUser;
    }

    update(id: number, user: CreateUserDto): CreateUserDto {
        const newUser = {id, ...user};
        this.users.set(id, newUser);
        return newUser;
    }

    remove(id: number): string {
        this.users.delete(id);
        return 'User removed';
    }

}
