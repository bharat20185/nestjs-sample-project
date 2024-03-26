// timestamp-to-date.pipe.ts

import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class TimestampDatePipe implements PipeTransform<number, Date> {
  transform(value: number, metadata: ArgumentMetadata): Date {
    const date = new Date(value * 1000);
    if (isNaN(date.getTime())) {
      throw new BadRequestException('Invalid timestamp');
    }
    return date;
  }
}
