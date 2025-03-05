import { City } from '../../types';

export const mockCities: City[] = [
    {
        name: 'Tokyo',
        name_native: '東京',
        country: 'Japan',
        continent: 'Asia',
        latitude: '35.6762',
        longitude: '139.6503',
        population: '13.96 million',
        founded: '1457',
        landmarks: ['Tokyo Tower', 'Shibuya Crossing', 'Senso-ji Temple'],
    },
    {
        name: 'Paris',
        name_native: 'Paris',
        country: 'France',
        continent: 'Europe',
        latitude: '48.8566',
        longitude: '2.3522',
        population: '2.16 million',
        founded: '250 BCE',
        landmarks: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    },
    {
        name: 'New York',
        name_native: 'New York',
        country: 'USA',
        continent: 'North America',
        latitude: '40.7128',
        longitude: '-74.0060',
        population: '8.38 million',
        founded: '1624',
        landmarks: [
            'Statue of Liberty',
            'Empire State Building',
            'Central Park',
        ],
    },
];
