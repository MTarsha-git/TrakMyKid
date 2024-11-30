import {Controller, Get, Post, Patch, Delete,Req, Param, Body, HttpCode, ParseIntPipe, ValidationPipe} from '@nestjs/common'
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';
//use before connect with DB
import {v4 as uuid } from "uuid" 
@Controller('users')
export class UsersController{
    constructor(private readonly userService:UsersService){

    }
    
    @Get()
    find(): UserEntity[] {
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string):UserEntity{
        return this.userService.findUser(id);
    }
    @Post()
    create(@Body()createUserDto:CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Patch(":id")
    update(@Param("id")id:string,@Body() updateUserDto:UpdateUserDto):UserEntity{
        return this.userService.updateInfo(id,updateUserDto);
    }
    @Delete(":id")
    remove(@Param("id")id:string): string{
        return this.userService.deleteUser(id);

    }

    
}