import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/404/404';
import CityWeatherDetails from './pages/CityWeatherDetails';
import Main from './pages/Main';

const PublicRouters = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/city/:id" element={<CityWeatherDetails />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default PublicRouters;
