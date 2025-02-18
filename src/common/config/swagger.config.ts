import { DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('NestJS 11 Template API')
  .setDescription('A simple template for NestJS 11 applications')
  .setVersion('1.0')
  .build();
