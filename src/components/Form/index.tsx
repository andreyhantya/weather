import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { fetchCityWeather } from '../../store/asyncActions/weather';
import { ONLY_LETTERS_REG_EXP } from '../../utils/constants/regex';

import { StyledForm, ErrorMessage } from './styles';

const Form = (): JSX.Element => {
    const [cityName, setCityName] = useState('');
    const [cityNameDirty, setCityNameDirty] = useState(false);
    const [cityNameError, setCityNameError] = useState('Enter the name of the city');
    const [formValid, setFormValid] = useState(false);

    const cityNameHandler = (value: string) => {
        setCityName(value);
        if (!ONLY_LETTERS_REG_EXP.test(String(value).toLowerCase())) {
            setCityNameError('Only letters');
        } else {
            setCityNameError('');
        }
    };

    useEffect(() => {
        cityNameError ? setFormValid(true) : setFormValid(false);
    }, [cityNameError]);

    return (
        <StyledForm>
            <Stack spacing={2} direction="column">
                <TextField
                    id="outlined-basic"
                    label="City Name"
                    variant="outlined"
                    value={cityName}
                    onBlur={() => setCityNameDirty(true)}
                    onChange={(e) => cityNameHandler(e.target.value)}
                />
                <Button
                    variant="contained"
                    disabled={formValid}
                    onClick={fetchCityWeather(cityName)}>
                    Send
                </Button>
            </Stack>
            {cityNameDirty && cityNameError && <ErrorMessage>{cityNameError}</ErrorMessage>}
        </StyledForm>
    );
};

export default Form;
