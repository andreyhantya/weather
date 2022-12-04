import React from 'react';
import CityCardList from '../../components/CityCardList';
import Form from '../../components/Form';

import { MainWrapper } from './styles';

const Main = (): JSX.Element => {
    return (
        <MainWrapper>
            <Form />
            <CityCardList />
        </MainWrapper>
    );
};

export default Main;
