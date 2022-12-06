import { SliceCityNameCallback } from './types';

export const getIconUrl = (iconName: string) => {
    return `http://openweathermap.org/img/wn/${iconName}.png`;
};

export const SliceCityName = (cityName: string): string => {
    const sclicedString = cityName.split(',')[0];

    return sclicedString;
};
