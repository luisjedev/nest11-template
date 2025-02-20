import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const SayHelloWorldSchema = z
  .object({
    message: z.string().min(1).max(100).describe('Message to show'),
    name: z.string().min(1).max(100).describe('Name'),
  })
  .required();

export class SayHelloWorldDto extends createZodDto(SayHelloWorldSchema) {}
