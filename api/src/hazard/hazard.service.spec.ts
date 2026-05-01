import { Test, TestingModule } from '@nestjs/testing';
import { HazardService } from './hazard.service';

describe('HazardService', () => {
  let service: HazardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HazardService],
    }).compile();

    service = module.get<HazardService>(HazardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
