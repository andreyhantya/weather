import { setCitiesData, refreshCityData, deleteCity } from './../slices/WeatherDataSlice';
import { store } from './../index';

describe('weatherDataSlice', () => {
    it('should be added city weather data', () => {
        const expected = [{ id: 1, name: 'Kiev', temp: 55 }];
        store.dispatch(setCitiesData({ id: 1, name: 'Kiev', temp: 55 }));

        const actual = store.getState().citiesData;

        expect(actual).toEqual(expected);
    });

    it('should be updated the weather data in the existing city ', () => {
        const expected = [{ id: 1, name: 'Kiev', temp: 86 }];
        store.dispatch(refreshCityData({ id: 1, name: 'Kiev', temp: 86 }));

        const actual = store.getState().citiesData;

        expect(actual).toEqual(expected);
    });

    it('should be deleted the weather data of the city', () => {
        store.dispatch(deleteCity(1));

        const actual = store.getState().citiesData;

        expect(actual).toEqual([]);
    });
});
