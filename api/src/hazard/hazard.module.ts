import { Module } from '@nestjs/common';
import { HazardService } from './hazard.service';
import { HazardController } from './hazard.controller';

@Module({
  controllers: [HazardController],
  providers: [HazardService],
})
export class HazardModule {}
