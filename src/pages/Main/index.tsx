import React, { useState } from 'react';
import { fetchCityWeather } from '../../store/asyncActions/weather';
import CityCardList from '../../components/CityCardList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Main = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <Stack spacing={2} direction="row">
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="contained" onClick={fetchCityWeather(inputValue)}>
                    Send
                </Button>
            </Stack>
            <CityCardList />
        </div>
    );
};

export default Main;
