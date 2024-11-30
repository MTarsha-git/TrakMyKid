import {Controller, Get, Post, Patch, Delete,Req, Param, Body, HttpCode, ParseIntPipe, ValidationPipe} from '@nestjs/common'
import { Request } from 'express';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { RoleEntity } from './roles.entity';
import { RolesService } from './roles.service';
//use before connect with DB
import {v4 as uuid } from "uuid" 
@Controller('roles')
export class RolesController{
    constructor(private readonly roleService:RolesService){

    }
    
    @Get()
    find(): RoleEntity[] {
        return this.roleService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id:string):RoleEntity{
        return this.roleService.findUser(id);
    }
    @Post()
    create(@Body()createRoleDto:CreateRoleDto){
        return this.roleService.createUser(createRoleDto);
    }
    @Delete(":id")
    remove(@Param("id")id:string): string{
        return this.roleService.deleteUser(id);

    }

    
}