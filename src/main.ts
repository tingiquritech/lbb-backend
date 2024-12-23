import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for all origins
  await app.listen(process.env.PORT || 8080);
  Logger.log(`Runner On Port http://localhost:${process.env.PORT}`)
}
bootstrap();
