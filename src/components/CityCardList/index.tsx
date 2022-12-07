import React from 'react';
import { useAppSelector } from '../../store/hooks';
import CityCard from '../CityCard';
import { ICityWeatherData } from '../../utils/constants/globalTypes';
import { StyledCardList, NoCardMessage } from './styles';

const CityCardList = (): JSX.Element => {
    const cities = useAppSelector((state) => state.citiesData);

    return (
        <StyledCardList>
            {cities.length ? (
                cities.map((elem: ICityWeatherData) => <CityCard data={elem} key={elem.id} />)
            ) : (
                <NoCardMessage>Нет добавленых карточек</NoCardMessage>
            )}
        </StyledCardList>
    );
};

export default React.memo(CityCardList);
