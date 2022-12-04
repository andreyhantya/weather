import { citiesDataSelector } from '../slices/WeatherDataSlice';

const citiesData = [
    {
        name: 'Kiev',
        weather: [{ id: 12, main: 'string', description: 'string', icon: 'string' }],
        coord: {
            lon: 12,
            lat: 312,
        },
        base: 'test',
        main: {
            temp: 12,
            feels_like: 12,
            temp_min: 12,
            temp_max: 12,
            pressure: 12,
            humidity: 12,
        },
        visibility: 12,
        wind: {
            speed: 12,
            deg: 12,
            gust: 12,
        },
        dt: 12,
        sys: { type: 12, id: 12, country: 'test', sunrise: 12, sunset: 12 },
        timezone: 12,
        id: 23,
        cod: 23,
        cloud: { all: 12 },
    },
];

describe('Redux selectors', () => {
    it('should select citiesList', () => {
        const result = citiesDataSelector.getCitiesList({ citiesData });

        expect(result).toEqual(citiesData);
    });
});
