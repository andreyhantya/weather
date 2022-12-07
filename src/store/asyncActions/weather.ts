import { API_ID, API_URL } from '../api/weatherApi';
import { useAppDispatch } from '../hooks';
import { refreshCityData, setCitiesData, setLoadingState } from '../slices/WeatherDataSlice';

export const fetchCityWeather = (cityName: string) => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(setLoadingState(true));

        fetch(`${API_URL}/data/2.5/weather?q=${cityName}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch(setLoadingState(false));

                switch (Number(json.cod)) {
                    case 404:
                        return alert('Такой город не найден');
                    case 200:
                        return dispatch(setCitiesData(json));
                }
            })
            .catch((error) => console.log(error));
    };
};

export const refreshCityInfo = (id: number) => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(setLoadingState(true));

        fetch(`${API_URL}/data/2.5/weather?id=${id}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch(setLoadingState(false));

                if (json.cod !== 200) {
                    return alert(json.message);
                }
                dispatch(refreshCityData(json));
            })
            .catch((error) => {
                dispatch(setLoadingState(false));
                console.log(error);
            });
    };
};
