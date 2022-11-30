import React, { useState } from 'react';
import { fetchCustomers } from '../../asyncActions/weather';
import CityCardList from '../../components/main/CityCardList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Main = () => {
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
                <Button variant="contained" onClick={fetchCustomers(inputValue)}>
                    Send
                </Button>
            </Stack>
            <CityCardList />
        </div>
    );
};

export default Main;
