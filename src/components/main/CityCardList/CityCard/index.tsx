import React from 'react';
import { deleteCity } from '../../../../store/slices/WeatherDataSlice';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useAppDispatch } from '../../../../store/hooks';
import { refreshCityInfo } from '../../../../asyncActions/weather';
import {
    CardWrapper,
    CardTitle,
    CardIcon,
    CardHeader,
    CardSubtitle,
    CardContent,
    CardButtonsWrapper,
} from './styles';

const getIconUrl = (iconName: string) => {
    return `http://openweathermap.org/img/wn/${iconName}.png`;
};

const CityCard = ({ data }: any) => {
    const dispatch = useAppDispatch();
    const { name, main, weather, id } = data;

    const q = () => {
        dispatch(deleteCity(id));
    };

    return (
        <CardWrapper>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardIcon src={getIconUrl(weather[0].icon)} alt="" />
            </CardHeader>
            <CardContent>
                <div>
                    <CardSubtitle>{weather[0].main} </CardSubtitle>
                    <CardSubtitle>{Math.floor(main.temp)}&#176;С</CardSubtitle>
                    <CardSubtitle>Feels like: {Math.floor(main.feels_like)}&#176;С</CardSubtitle>
                </div>
                <CardButtonsWrapper>
                    <IconButton aria-label="refresh" color="primary" onClick={refreshCityInfo(id)}>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton aria-label="delete" size="large" onClick={q}>
                        <DeleteIcon />
                    </IconButton>
                </CardButtonsWrapper>
            </CardContent>
            <Link to={`/${id}`}>
                <p>Больше инфы...</p>
            </Link>
        </CardWrapper>
    );
};

export default React.memo(CityCard);
