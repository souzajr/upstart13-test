import useFetch from './useFetch';

import {
  IGetForecastLocation,
  IGetGeocodingLocation,
  IGetPeriods,
  IGetWeatherReturnProps,
} from './types';

const getGeocodingLocation = async (
  address: string,
  city: string,
  state: string
) => {
  const geocodingLocationUrl = `${process.env.REACT_APP_GEOCODING_URL?.replace(
    'ADDRESS_LOCATION',
    encodeURI(address.trim())
  )
    ?.replace('CITY_LOCATION', encodeURI(city.trim()))
    ?.replace('STATE_LOCATION', encodeURI(state.trim()))}`;

  const response = await useFetch<IGetGeocodingLocation>(
    geocodingLocationUrl,
    'jsonp'
  );

  return response;
};

const getForecast = async (lat: number, lon: number) => {
  const getForecastUrl = `${process.env.REACT_APP_GRIDFORECAST_URL}/${lat},${lon}`;

  const response = await useFetch<IGetForecastLocation>(
    getForecastUrl,
    'normal'
  );

  return response;
};

const getPeriod = async (url: string) => {
  const response = await useFetch<IGetPeriods>(url, 'normal');

  return response;
};

export const getWeather = async (
  address: string,
  city: string,
  state: string
): Promise<IGetWeatherReturnProps> => {
  const location = await getGeocodingLocation(address, city, state);

  if (location.error) {
    return {
      error: true,
      data: `${location.message}`,
    };
  }

  if (!location.data?.result.addressMatches.length) {
    return {
      error: true,
      data: 'Invalid address',
    };
  }

  const latitude = location.data?.result.addressMatches[0].coordinates.y || 0;
  const longitude = location.data?.result.addressMatches[0].coordinates.x || 0;

  const forecast = await getForecast(latitude, longitude);

  if (forecast.error) {
    return {
      error: true,
      data: `${location.message}`,
    };
  }

  if (forecast.data?.properties.forecast) {
    const periods = await getPeriod(forecast.data?.properties.forecast);

    if (periods.data?.properties.periods.length) {
      return {
        error: false,
        data: periods.data.properties.periods,
      };
    }
  }

  return {
    error: true,
    data: 'Invalid address',
  };
};
