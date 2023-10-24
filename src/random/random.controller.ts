import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";
import { RandomService } from "./random.service";

@Controller ("random")
export class RandomController {
    constructor(private RandomService: RandomService) {}
    @Post("daftar")
    signup (@Body() user: any) {
        return this.RandomService.signup(user);
    }
    @Get("ambil")
    take(@Body() user: any) {
        return this.RandomService.take();
    }
}