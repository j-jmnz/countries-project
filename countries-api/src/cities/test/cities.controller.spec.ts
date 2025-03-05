import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from '../cities.controller';
import { CitiesService } from '../cities.service';
import { mockCities } from './mocks';

describe('CitiesController', () => {
  describe('getAllCities', () => {
    it('should return an array of cities', async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [CitiesController],
        providers: [
          {
            provide: CitiesService,
            useValue: {
              getAllCities: jest.fn().mockResolvedValue(mockCities),
            },
          },
        ],
      }).compile();

      const controller = module.get(CitiesController);
      const result = await controller.getAllCities();

      expect(result).toEqual(mockCities);
    });
  });
});
