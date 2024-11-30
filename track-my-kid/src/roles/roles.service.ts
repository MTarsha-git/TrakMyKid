import {Injectable} from "@nestjs/common";
import { RoleEntity } from "./roles.entity";
import { CreateRoleDto } from "./dtos/create-role.dto";
import { UpdateRoleDto } from "./dtos/update-role.dto";
import {v4 as uuid} from "uuid"

@Injectable()
export class RolesService{ 
    private Roles:RoleEntity[] = [];
    createUser(createRoleDto:CreateRoleDto): RoleEntity {
        const newRole:RoleEntity = {
            id:uuid(),
            ...createRoleDto,
        }
        this.Roles.push(newRole);
        return newRole;
    
    }
    findAll(): RoleEntity[] {
        return this.Roles;

    }
    findUser(id:string): RoleEntity{
        const role:RoleEntity = this.Roles.find((user)=> user.id===id);
        return role;

    }
    updateInfo(id:string,updateRoleDto:UpdateRoleDto):RoleEntity{
                //1) find the element index that we want to update
        const index :number= this.Roles.findIndex((role)=> role.id===id);
        
        this.Roles[index]={...this.Roles[index], ...updateRoleDto};
        return this.Roles[index];
    }

    deleteUser(id:string){
        const index :number= this.Roles.findIndex((role)=> role.id===id);
        this.Roles.splice(index,1)
        return 'remove role'
    }
}