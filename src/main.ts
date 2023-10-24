import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // for (let result = 0; result < 5; result++) {
  //   console.log("KNTL AJG sdfsd sdfs");
  // }
  
    console.log("astagfirullah");
    await app.listen(3250);
  
}
bootstrap();
// ini harus di ganti dengan npm run start
// atau nodemon dengan menggunakan beberapa hal npm / yarn sebagai fondasi utama 