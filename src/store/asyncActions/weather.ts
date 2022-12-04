import { API_ID, API_URL } from '../api/weatherApi';
import { useAppDispatch } from '../hooks';
import { refreshCityData, setCitiesData } from '../slices/WeatherDataSlice';

export const fetchCityWeather = (cityName: string) => {
    const dispatch = useAppDispatch();

    return () => {
        fetch(`${API_URL}/data/2.5/weather?q=${cityName}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(123, json);
                if (json.cod !== 200) {
                    return alert(json.message);
                }
                return dispatch(setCitiesData(json));
            })
            .catch((error) => console.log(error));
    };
};

export const refreshCityInfo = (id: number) => {
    const dispatch = useAppDispatch();

    return () => {
        fetch(`${API_URL}/data/2.5/weather?id=${id}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.cod !== 200) {
                    return alert(json.message);
                }
                dispatch(refreshCityData(json));
            })
            .catch((error) => console.log(error));
    };
};
