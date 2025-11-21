import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsController } from './programs.controller';
import { ProgramsService } from './programs.service';
import { getModelToken } from '@nestjs/mongoose';
import { mockModel } from '../common/mocks/model';

describe('ProgramsController', () => {
  let controller: ProgramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgramsController],
      providers: [
        ProgramsService,
        { provide: getModelToken('Program'), useValue: mockModel },
      ],
    }).compile();

    controller = module.get<ProgramsController>(ProgramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
