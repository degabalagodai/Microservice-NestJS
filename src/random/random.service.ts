import { Injectable, Param } from "@nestjs/common";
import { Random } from "src/random/random.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"; 

@Injectable ({})

export class RandomService {
    constructor(
        @InjectRepository(Random)
        private userRepository: Repository<Random>
    ) {}

    async signup (test) {
        //console.log(test)
        const result = await this.userRepository.create(test)
        try {
            const res = await this.userRepository.save(result);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        return "Berhasil SignUp";
    }
    async take(): Promise<Random[]> {
        return await this.userRepository.find();
    }
}
