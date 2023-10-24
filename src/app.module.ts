import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Random } from './random/random.entity';
import { RandomModule } from './random/random.module';

@Module({
  imports: [
    RandomModule,  
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'degabalagodai',
      password: 'Balagodai',
      database: 'degabalagodai-2',
      entities: [Random],
      synchronize: true,
    }),
  ]
})

export class AppModule {}
