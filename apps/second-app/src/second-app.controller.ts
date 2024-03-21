import { Controller, Get, Inject } from '@nestjs/common';
import { SecondAppService } from './second-app.service';

@Controller()
export class SecondAppController {
  constructor(
    private readonly secondAppService: SecondAppService,
    @Inject('DATABASE_CONNECTION') private readonly connection: string,
  ) {
    console.log(this.connection);
  }

  @Get()
  getHello(): string {
    return this.secondAppService.getHello();
  }
}
