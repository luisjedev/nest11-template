import { Inject, Logger } from '@nestjs/common';

export function LoggerResponse() {
  const injectLogger = Inject(Logger);

  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    injectLogger(target, 'logger');
    const originalMethod = propertyDescriptor.value;

    propertyDescriptor.value = async function (...args: any[]) {
      const value = await originalMethod.apply(this, args);
      const logger: Logger = this.logger;
      logger.log(`${propertyKey}: ${value}`);
      return value;
    };
  };
}
