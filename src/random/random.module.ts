import { Module } from "@nestjs/common";
import { RandomController } from "./random.controller";
import { RandomService } from "./random.service";
import { Random } from "src/random/random.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
//import { EntityRepository } from "typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Random])],
    controllers: [RandomController],
    providers: [RandomService], 
})
export class RandomModule{}