import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICityWeatherData } from '../../utils/constants/globalTypes';
import { IInitialState } from './types';

const initialState: IInitialState = {
    citiesData: [],
};

const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setCitiesData: (state, action: PayloadAction<ICityWeatherData>) => {
            state.citiesData.push(action.payload);
        },

        refreshCityData: (state, action: PayloadAction<ICityWeatherData>) => {
            const newData = action.payload;

            const newCitiesData = current(state).citiesData.map((elem) => {
                if (elem.id === newData.id) {
                    return newData;
                }
                return elem;
            });

            state.citiesData = newCitiesData;
        },

        deleteCity: (state, action: PayloadAction<number>) => {
            const deletedCityId = action.payload;
            const newCitiesData = current(state).citiesData.filter(
                (elem) => elem.id !== deletedCityId,
            );

            state.citiesData = newCitiesData;
        },
    },
});

export const { setCitiesData, refreshCityData, deleteCity } = weatherDataSlice.actions;
export const citiesData = (state: IInitialState) => state.citiesData;
export const citiesDataSelector = {
    getCitiesList: (state: IInitialState) => state.citiesData,
    getCityById: (state: IInitialState, id: number) => {
        return state.citiesData.find((elem: ICityWeatherData) => elem.id === id);
    },
};
export const getCitiesList = (state: IInitialState) => state.citiesData;
export default weatherDataSlice;
