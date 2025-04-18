import { AppService } from '@/app.service';
import { SayHelloWorldDto } from '@/common/dto/hello-world.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { LoggerResponse } from './common/decorators/logger-response.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('hello')
  @LoggerResponse()
  post(@Body() body: SayHelloWorldDto) {
    return this.appService.sayHello(body);
  }
}
