import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICityWeatherData } from '../../constants/globalTypes';

interface IInitialState {
    citiesData: ICityWeatherData[];
}

const initialState: IInitialState = {
    citiesData: [],
};

const weatherDataSlice = createSlice({
    name: 'weatherData',
    initialState,
    reducers: {
        setSitiesData: (state, action: PayloadAction<ICityWeatherData>) => {
            state.citiesData.push(action.payload);
            console.log(action.payload);
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
        deleteCity: (state, action: PayloadAction<ICityWeatherData>) => {
            const deletedCityId = action.payload;

            const newCitiesData = current(state).citiesData.filter(
                (elem) => elem.id !== Number(deletedCityId),
            );

            state.citiesData = newCitiesData;
        },
    },
});

export const { setSitiesData, refreshCityData, deleteCity } = weatherDataSlice.actions;
export const citiesData = (state: IInitialState) => state.citiesData;
export const citiesDataSelector = {
    getCitiesList: (state: IInitialState) => state.citiesData,
    getCityById: (state: any, id: number) => {
        return state.citiesData.find((elem: ICityWeatherData) => elem.id === id);
    },
};
export default weatherDataSlice;
