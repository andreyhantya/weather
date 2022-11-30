export interface ICoord {
    lon: number;
    lat: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface IWind {
    speed: number;
    deg: number;
    gust: number;
}

export interface ISys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface IClouds {
    all: number;
}

export interface ICityWeatherData {
    name: string;
    weather: IWeather[];
    coord: ICoord;
    base: string;
    main: IMain;
    visibility: number;
    wind: IWind;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    cod: number;
    cloud: IClouds;
}
