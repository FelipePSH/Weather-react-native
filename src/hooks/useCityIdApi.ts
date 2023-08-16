import axios from "axios";
import { APIRoutes } from "../api/api-routes.enum";
import putToken from '../api/putToken';

type APIURLParams = {
  latitude: number;
  longitude: number;
};

interface Weather {
  id: number; 
}

export async function fetchCityId({
  latitude,
  longitude
}: APIURLParams): Promise<Weather> {
  const resource = APIRoutes.BASE_URL
  const mountUrl = resource + APIRoutes.USER_LOCALE_BY_LATITUDE_AND_LONGITUDE.replace(
    ':userLat',
    latitude.toString(),
  ).replace(
    ':userLong',
    longitude.toString()
  );

  const api = putToken(mountUrl);

  try {
    const response = await axios.get(api.toString());
    if (!response.data) {
      throw new Error('Failed to fetch weather data');
    }
    const weatherData: Weather = {
      id: response.data.id,
    };
    return weatherData;
  } catch (error) {
    console.log(error)
    console.error('Error fetching weather:', error);
    throw error;
  }
}
