import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as bodyParser from 'body-parser';

const prod = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(cookieParser());

  app.enableCors({
    origin: process.env.ORIGIN,
    credentials: true,
  });

  if (prod) {
    app.use(helmet());
    app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  }

  await app.listen(3000);
}
bootstrap();
