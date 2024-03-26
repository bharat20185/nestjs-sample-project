import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { SecondAppController } from './second-app.controller';
import { SecondAppService } from './second-app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerService } from './logger.service';
import { LoggerMiddleware } from './logger.middleware';

const ENV_NAME = 'dev';

@Module({
  imports: [CatsModule],
  controllers: [SecondAppController],
  providers: [
    SecondAppService,
    LoggerService
  ],
})
export class SecondAppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
