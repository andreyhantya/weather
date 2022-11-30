import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { citiesDataSelector } from '../../../store/slices/WeatherDataSlice';
import CityCard from './CityCard';
import { StyledCardList } from './styles';
import { ICityWeatherData } from '../../../constants/globalTypes';

const CityCardList = (): JSX.Element => {
    const cities = useAppSelector(citiesDataSelector.getCitiesList);

    return (
        <StyledCardList>
            {cities ? (
                cities.map((elem: ICityWeatherData) => <CityCard data={elem} key={elem.id} />)
            ) : (
                <div>Ничего нет</div>
            )}
        </StyledCardList>
    );
};

export default React.memo(CityCardList);
