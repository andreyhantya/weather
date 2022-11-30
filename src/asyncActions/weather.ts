import { useAppDispatch } from '../store/hooks';
import { setSitiesData, refreshCityData } from '../store/slices/WeatherDataSlice';

import { API_ID, API_URL } from '../constants/base';

export const fetchCustomers = (cityName: string) => {
    const dispatch = useAppDispatch();

    return () => {
        fetch(`${API_URL}?q=${cityName}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.cod !== 200) {
                    return alert(json.message);
                }
                dispatch(setSitiesData(json));
            })
            .catch((error) => console.log(error));
    };
};

export const refreshCityInfo = (id: string) => {
    const dispatch = useAppDispatch();

    return () => {
        fetch(`${API_URL}?id=${id}&units=metric&limit=5&appid=${API_ID}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.cod !== 200) {
                    return alert(json.message);
                }
                dispatch(refreshCityData(json));
            });
    };
};
