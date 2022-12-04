import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { citiesDataSelector } from '../../store/slices/WeatherDataSlice';
import { DetailsWrapper, HomeLink, Title, InformationWrapper } from './styles';

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
        <>
            <DetailsWrapper>
                {cityData ? (
                    <InformationWrapper>
                        <Title>{name}</Title>
                        <p>Temperature: {temp}</p>
                        <p>Feels like: {feels_like}</p>
                        <p>Temperature max: {temp_max}</p>
                        <p>Temperature min: {temp_min}</p>
                        <p>Deg: {deg}</p>
                        <p>Gust: {gust}</p>
                        <p>Speed: {speed}</p>
                    </InformationWrapper>
                ) : null}
                <HomeLink to={`/`}>Home</HomeLink>
            </DetailsWrapper>
        </>
    );
};

export default React.memo(CityWeatherDetails);
