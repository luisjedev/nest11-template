import { AppModule } from '@/app.module';
import { config } from '@/common/config/swagger.config';
import { ConsoleLogger, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';

export const GLOBAL_PREFIX = 'api/';
export const DOCUMENTATION_PATH = 'api/docs';

async function main() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });
  const logger = new Logger('main');

  app.setGlobalPrefix(GLOBAL_PREFIX);

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(DOCUMENTATION_PATH, app, documentFactory, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });
  patchNestJsSwagger();

  await app.listen(process.env.PORT ?? 3001);
  logger.log(`Server is running on port ${process.env.PORT ?? 3001}`);
}

void main();
