import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieParcer = require('cookie-parser');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParcer('secSergio'));
  await app.listen(3001);
}
bootstrap();
