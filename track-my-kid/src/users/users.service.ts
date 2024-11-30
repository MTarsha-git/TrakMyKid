import {Injectable} from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import {v4 as uuid} from "uuid"

@Injectable()
export class UsersService{ 
    private users:UserEntity[] = [];
    createUser(createUserDto:CreateUserDto): UserEntity {
        const newUser:UserEntity = {
            id:uuid(),
            ...createUserDto,
        }
        this.users.push(newUser);
        return newUser;
    
    }
    findAll(): UserEntity[] {
        return this.users;

    }
    findUser(id:string): UserEntity{
        const user:UserEntity = this.users.find((user)=> user.id===id);
        return user;

    }
    updateInfo(id:string,updateUserDto:UpdateUserDto):UserEntity{
                //1) find the element index that we want to update
        const index :number= this.users.findIndex((user)=> user.id===id);
        
        this.users[index]={...this.users[index], ...updateUserDto};
        return this.users[index];
    }

    deleteUser(id:string){
        const index :number= this.users.findIndex((user)=> user.id===id);
        this.users.splice(index,1)
        return 'remove user'
    }
}