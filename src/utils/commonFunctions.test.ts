import { getIconUrl } from './commonFunctions';
import expect from 'expect';

describe('getIconUrl', () => {
    it('should return the string address of the picture', () => {
        const iconName = '024n';
        const expected = 'http://openweathermap.org/img/wn/024n.png';

        expect(getIconUrl(iconName)).toEqual(expected);
    });
});
