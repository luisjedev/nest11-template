import { Injectable } from '@nestjs/common';
import { SayHelloWorldDto } from '@/common/dto/hello-world.dto';

@Injectable()
export class AppService {
  sayHello(sayHello: SayHelloWorldDto) {
    return `${sayHello.message}  ${sayHello.name}`;
  }
}
