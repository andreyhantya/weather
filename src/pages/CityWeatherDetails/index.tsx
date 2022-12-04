import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DetailsWrapper } from './styles';
import { useAppSelector } from '../../store/hooks';
import { citiesDataSelector } from '../../store/slices/WeatherDataSlice';

const CityWeatherDetails = (): JSX.Element => {
    const { id } = useParams();
    const cityData = useAppSelector((state) => citiesDataSelector.getCityById(state, Number(id)));

    if (!cityData) return <></>;

    const {
        name,
        main: { feels_like, temp, temp_max, temp_min },
        sys,
        wind: { deg, gust, speed },
    } = cityData;

    return (
        <DetailsWrapper>
            <Link to={`/`}>
                <p>На главную</p>
            </Link>
            {cityData ? (
                <div>
                    <p>{name}</p>
                    <p>Temperature: {temp}</p>

                    <p>Feels like:{feels_like}</p>
                    <p>Temperature max: {temp_max}</p>
                    <p>Temperature min: {temp_min}</p>
                    <p>{deg}</p>
                    <p>{gust}</p>
                    <p>{speed}</p>
                </div>
            ) : null}
        </DetailsWrapper>
    );
};

export default React.memo(CityWeatherDetails);
