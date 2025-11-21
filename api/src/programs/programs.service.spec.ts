import { Test, TestingModule } from '@nestjs/testing';
import { ProgramsService } from './programs.service';
import { getModelToken } from '@nestjs/mongoose';
import { mockModel } from '../common/mocks/model';

describe('ProgramsService', () => {
  let service: ProgramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProgramsService,
        { provide: getModelToken('Program'), useValue: mockModel },
      ],
    }).compile();

    service = module.get<ProgramsService>(ProgramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
