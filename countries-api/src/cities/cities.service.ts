import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface City {
  name: string;
  name_native: string;
  country: string;
  continent: string;
  latitude: string;
  longitude: string;
  population: string;
  founded: string;
  landmarks: string[];
}

interface CitiesData {
  cities: City[];
}

@Injectable()
export class CitiesService {
  async getAllCities(): Promise<City[]> {
    try {
      const filePath = path.join(process.cwd(), 'cities.json');

      const citiesData = await fs.promises.readFile(filePath, 'utf8');
      const parsedData = JSON.parse(citiesData) as CitiesData;

      return parsedData.cities;
    } catch (error) {
      console.error('Error reading cities data:', error);

      throw new Error('Failed to retrieve cities data');
    }
  }
}
