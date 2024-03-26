import { Controller, Get, Inject } from '@nestjs/common';
import { SecondAppService } from './second-app.service';
import { LoggerService } from './logger.service';

@Controller()
export class SecondAppController {
  constructor(
    private readonly secondAppService: SecondAppService,
    private readonly loggerService: LoggerService,
  ) {
  }

  @Get()
  getHello(): string {
    this.loggerService.log('Hello World!');
    this.loggerService.error('Error message', 'stack trace');
    return this.secondAppService.getHello();
  }
}
