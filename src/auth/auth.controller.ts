import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller ("auth")
export class AuthController {
    constructor(private AuthService: AuthService) {}
    @Post("signup")
    signup (@Body() user: any) {
        return this.AuthService.signup(user);
    }
    @Get("data")  
    data(@Body() user: any) {
        return this.AuthService.data();
    }
    @Get(":id")
    getById(@Param('id') id: string) {
        return this.AuthService.getById(id);
      //return `Get resource by ID: ${id}`;
    }
  
} 
    // @Patch("data/:id")
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this.AuthService.update(+id, updateUserDto);
    // }
        // @Get("data/:id")
    // dataOne(@Param("id") user: any) {
    //   return this.AuthService.dataOne
    // }
    // @Delete("data/:id")
    // delete(@Param("id") id: string, @Body() data: any) {
    //     return this.AuthService.delete;
    // }
