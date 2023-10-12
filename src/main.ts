import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  for (let result = 0; result < 5; result++) {
    console.log("KNTL AJG");
  }
  await app.listen(3950);
}
bootstrap();
