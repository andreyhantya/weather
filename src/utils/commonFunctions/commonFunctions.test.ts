import { getIconUrl, SliceCityName } from './commonFunctions';
import expect from 'expect';

describe('getIconUrl', () => {
    it('should return the string address of the picture', () => {
        const iconName = '024n';

        const expected = 'http://openweathermap.org/img/wn/024n.png';
        const actual = getIconUrl(iconName);

        expect(expected).toEqual(actual);
    });
});

describe('SliceCityName', () => {
    it('should return the name of the city', () => {
        const fullCityName = 'test, testtest, testtesttest';

        const actual = SliceCityName(fullCityName);
        const expected = 'test';

        expect(expected).toEqual(actual);
    });
});
