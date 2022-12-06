import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { fetchCityWeather } from '../../store/asyncActions/weather';
import { ONLY_LETTERS_REG_EXP } from '../../utils/constants/regex';
import { StyledForm, ErrorMessage, TextField } from './styles';
import { GOOGLE_MAPS_API_ID } from '../../store/api/weatherApi';
import { SliceCityName } from '../../utils/commonFunctions/commonFunctions';

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
                    placeholder="Enter city name"
                    apiKey={GOOGLE_MAPS_API_ID}
                    onPlaceSelected={({ formatted_address }) => {
                        const slicedCityName = SliceCityName(formatted_address || '');
                        setCityName(slicedCityName);
                    }}
                    onChange={(e) => cityNameHandler((e.target as HTMLInputElement).value)}
                    defaultValue={cityName}
                    onBlur={() => setCityNameDirty(true)}
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
