import {Controller, Get, Post, Patch, Delete,Req, Param, Body, HttpCode} from '@nestjs/common'
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
//use before connect with DB
import {v4 as uuid } from "uuid" 
@Controller('users')
export class UsersController{
    
    private readonly users: UserEntity[] = [];

    @Get()
    find(): UserEntity[] {
        return this.users;
    }
    @Get(':id')
    findOne(@Param('id') id:string):UserEntity{
        const user:UserEntity = this.users.find((user)=> user.id===id);
        return user;
    }
    @Post()
    create(@Body()createUserDto:CreateUserDto){
        const newUser:UserEntity = {
            id:uuid(),
            ...createUserDto,
        }
        this.users.push(newUser);
        return newUser;
        //business logic

        return createUserDto
    }

    @Patch(":id")
    update(@Param("id")id:string,@Body() updateUserDto:UpdateUserDto):UserEntity{
        //1) find the element index that we want to update
        const index :number= this.users.findIndex((user)=> user.id===id);
        
        this.users[index]={...this.users[index], ...updateUserDto};
        return this.users[index];
    }
    @Delete(":id")
    remove(@Param("id")id:string): string{
        const index :number= this.users.findIndex((user)=> user.id===id);
        this.users.splice(index,1)
        return 'remove user'
    }

    
}