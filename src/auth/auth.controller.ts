import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller ("auth")
export class AuthController {
    constructor(private AuthService: AuthService) {}
    @Post("signup")
    signup (@Body() user: any) {
        return this.AuthService.signup(user);
    }
    @Get("data/:id")  
    data(@Body() user: any) {
        return this.AuthService.data();
    }
   // @Get("data/:id")
    //dataOne(@Param("id") user: any) {
      //  return this.AuthService.dataOne
    //}
    @Put("data/:id")
    update(@Param("id") id: number, @Body() data: any) {
        return this.AuthService.update;
    }
    @Delete("data/:id")
    delete(@Param("id") id: string, @Body() data: any) {
        return this.AuthService.delete;
    }
} 