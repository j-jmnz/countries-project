import { Controller, Get } from '@nestjs/common';
import { CitiesService, City } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getAllCities(): Promise<City[]> {
    return this.citiesService.getAllCities();
  }
}
