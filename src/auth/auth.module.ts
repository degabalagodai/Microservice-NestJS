import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Auth } from "src/auth/auth.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
//import { EntityRepository } from "typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Auth])],
    controllers: [AuthController],
    providers: [AuthService], 
})
export class AuthModule{}