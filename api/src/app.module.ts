import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HazardModule } from './hazard/hazard.module';

@Module({
  imports: [HazardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
