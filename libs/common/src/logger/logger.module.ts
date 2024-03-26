import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { winstonConfig } from '../config/winston.config';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: Logger,
      useValue: winstonConfig.logger,
    },
    ConfigService,
  ],
  exports: [Logger, ConfigService],
})
export class LoggerModule {}
