import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CitiesService } from '../src/cities/cities.service';
import { mockCities } from '../src/cities/test/mocks';

describe('CitiesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(CitiesService)
      .useValue({
        getAllCities: jest.fn().mockResolvedValue(mockCities),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cities (GET) - returns cities data', () => {
    return request(app.getHttpServer())
      .get('/cities')
      .expect(200)
      .expect(mockCities);
  });
});
