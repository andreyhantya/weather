import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICityWeatherData } from '../../utils/constants/globalTypes';
import { IInitialState } from './types';

const initialState: IInitialState = {
    citiesData: [],
    isLoading: false,
};

const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setCitiesData: (state, action: PayloadAction<ICityWeatherData>) => {
            const currentCities = current(state).citiesData;
            const isDublicate = currentCities.some((city) => city.id === action.payload.id);
            if (isDublicate) return alert('Этот город уже добавлен в список');

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

        setLoadingState: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setCitiesData, refreshCityData, deleteCity, setLoadingState } =
    weatherDataSlice.actions;
export const citiesData = (state: IInitialState) => state.citiesData;
export const citiesDataSelector = {
    getCitiesList: (state: IInitialState) => state.citiesData,
    getCityById: (state: IInitialState, id: number) => {
        return state.citiesData.find((elem: ICityWeatherData) => elem.id === id);
    },
    getLoaderState: (state: IInitialState) => {
        return state.isLoading;
    },
};
export const getCitiesList = (state: IInitialState) => state.citiesData;
export default weatherDataSlice;
