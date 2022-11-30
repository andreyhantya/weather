import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CityWeatherDetails from './pages/CityWeatherDetails';
import Main from './pages/Main/main';

const App = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="*" element={<Main />} />
                <Route path="/:id" element={<CityWeatherDetails />} />
            </Routes>
        </>
    );
};

export default App;
