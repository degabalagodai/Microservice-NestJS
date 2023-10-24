import { Injectable, Param } from "@nestjs/common";
import { Auth } from "src/auth/auth.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm"; 

@Injectable ({})

export class AuthService {
    constructor(
        @InjectRepository(Auth)
        private userRepository: Repository<Auth>
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
    async data(): Promise<Auth[]> {
        return await this.userRepository.find();
    }
    
    async getById(@Param('id') id: string) {
        const resource = await this.userRepository.getId;
  
        return 
    }
}
