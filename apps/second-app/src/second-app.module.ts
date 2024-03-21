import { Module } from '@nestjs/common';
import { SecondAppController } from './second-app.controller';
import { SecondAppService } from './second-app.service';
import { CatsModule } from './cats/cats.module';

const ENV_NAME = 'dev';

@Module({
  imports: [CatsModule],
  controllers: [SecondAppController],
  providers: [
    SecondAppService,
    {provide: 'APP_NAME', useValue: 'Second App'},
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (appName: string) => {
        return 'connection to database...' + appName;
      },
      inject: [{token: 'APP_NAME', optional: true}],
    }
  ],
})
export class SecondAppModule {}
