export interface IGetGeocodingLocation {
  result: {
    addressMatches: {
      coordinates: {
        x: number;
        y: number;
      };
    }[];
  };
}

export interface IGetForecastLocation {
  properties: {
    forecast: string;
  };
}

export interface IPeriods {
  number: number;
  name: string;
  startTime: string;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
}

export interface IGetPeriods {
  properties: {
    periods: IPeriods[];
  };
}

export interface IGetWeatherReturnProps {
  error: boolean;
  data: IPeriods[] | string;
}
