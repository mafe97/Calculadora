import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateController } from './calculate/calculate.controller';
import { CalculateService } from './calculate/calculate.service';
import { CalculateModule } from './calculate/calculate.module';

@Module({
  imports: [CalculateModule],
  controllers: [AppController, CalculateController],
  providers: [AppService, CalculateService],
})
export class AppModule {}
