import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsWrapper } from './styles';
import { useAppSelector } from '../../store/hooks';
import { citiesDataSelector } from '../../store/slices/WeatherDataSlice';

const CityWeatherDetails = () => {
    const { id } = useParams();
    const cityData = useAppSelector((state) => citiesDataSelector.getCityById(state, Number(id)));

    const {
        name,
        main: { feels_like, temp, temp_max, temp_min },
        weahter,
        sys,
        wind: { deg, gust, speed },
    } = cityData;

    return (
        <DetailsWrapper>
            {cityData ? (
                <div>
                    <p>{name}</p>
                    <p>{feels_like}</p>
                    <p>{temp}</p>
                    <p>{temp_max}</p>
                    <p>{temp_min}</p>
                    <p>{deg}</p>
                    <p>{gust}</p>
                    <p>{speed}</p>
                </div>
            ) : null}
        </DetailsWrapper>
    );
};

export default React.memo(CityWeatherDetails);
