import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/app.module';
import 'module-alias/register';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
