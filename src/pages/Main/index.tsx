import React from 'react';
import CityCardList from '../../components/CityCardList';
import Form from '../../components/Form';
import Loader from '../../components/Loader';
import { useAppSelector } from '../../store/hooks';
import { citiesDataSelector } from '../../store/slices/WeatherDataSlice';

import { MainWrapper } from './styles';

const Main = (): JSX.Element => {
    const isLoading = useAppSelector(citiesDataSelector.getLoaderState);

    return (
        <MainWrapper>
            <Form />
            <Loader isLoading={isLoading} width={1000} height={3} speedMultiplier={0.8} />
            <CityCardList />
        </MainWrapper>
    );
};

export default Main;
