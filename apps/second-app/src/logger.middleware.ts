import { NestMiddleware } from '@nestjs/common';
import { LoggerService } from './logger.service';

export class LoggerMiddleware implements NestMiddleware {
  private readonly loggerService: LoggerService = new LoggerService();
  constructor() {}

  use(req: Request, res: Response, next: Function) {
    const { method, headers } = req;
    const logData = {
      method,
      headers, // Optionally, you can log the headers object as well
    };

    this.loggerService.log('Request...');
    this.loggerService.error('Error message', JSON.stringify(logData));
    next();
  }
}
