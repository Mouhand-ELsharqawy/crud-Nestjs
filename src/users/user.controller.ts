import { Body, Controller,Get, Param, ParseUUIDPipe, Post, Patch, Delete } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { CreateUserDto } from "./createuser.dto";
import { ValidationPipe } from "@nestjs/common";
import path from "path";
import { UpdateUserDto } from "./updateuser.dto";
import { v4 as uuid } from "uuid";
// import { v4 as uuid } from "uuid";
// import { Get } from "@nestjs/common";

@Controller('api/users')
export class UserController{
    private users:User [] = [];
    constructor(private userservice:UserService){}
    @Get()
    getAll(){
        return this.userservice.getAll();
    }
    @Post()
    createUser( @Body(
        ValidationPipe
    ) createuserdto:CreateUserDto){
      
        // const newUser: User = {
        //     id: uuid(),
        //     ...createuserdto
        // }
        // this.users.push(newUser);
        // return newUser;
        this.userservice.InsertUser(createuserdto);
        return 'user created';
    }
    @Get(":id")
    getUser(@Param("id",ParseUUIDPipe) id) {
    return this.userservice.getUser(id);
    }


    @Patch(":id")
    update(@Param(":id")id,
    @Body(ValidationPipe) updateuserdto:UpdateUserDto
    ){
        this.userservice.updateUser(id,updateuserdto);
    }
    @Delete(':id')
    delete(@Param('id')id:string){
        this.userservice.delete(id);
    }

}