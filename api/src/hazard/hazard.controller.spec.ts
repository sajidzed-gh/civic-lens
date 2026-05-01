import { Test, TestingModule } from '@nestjs/testing';
import { HazardController } from './hazard.controller';
import { HazardService } from './hazard.service';

describe('HazardController', () => {
  let controller: HazardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HazardController],
      providers: [HazardService],
    }).compile();

    controller = module.get<HazardController>(HazardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
