import { Controller, Get } from '@nestjs/common';
import { HazardService } from './hazard.service';
import HazardReport from '../entity/hazard-report';

@Controller('hazard')
export class HazardController {
  constructor(private readonly hazardService: HazardService) {}

  @Get()
  getHello(): string {
    return 'this.appService.getHello()';
  }

  @Get()
  analyzeHazard(): Promise<HazardReport> {
    return this.hazardService.analyzeHazard('', { lat: 0, lng: 0 });
  }
}
