import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { CreateUserDto } from "./createuser.dto";
import { v4 as uuid } from "uuid";
import { UUID } from "crypto";

@Injectable()
export class UserService{
    private users:User [] = [];
    getAll(){
        //that's return copy from the real array of users it's more security
        return [...this.users];
    }  
     
    InsertUser( newUser:User ){
        const user: User = {
            id: uuid(),
            ...newUser
        }
        this.users.push(user);
    }
    getUser(id){
        return this.users.find(user => user.id == id) 
    }
    updateUser(id,newUser:User){
        const index = this.users.findIndex((user) => user[id] == id);
        this.users[index] = {...this.users[index],...newUser};
        return [this.users[index],index];
    }
    delete(id): string{
        this.users = this.users.filter((user)=>user[id] != id)
        return 'user deleted';
    }
}