import { useState, useEffect } from "react";
import { useCoords } from "../../../hooks/useCoords";
import { useCityIdApi } from "../../../hooks/useCityIdApi";
import { useRegisterCityApi } from "~/hooks/useRegisterCityApi";
import { APIRoutes } from "../../../api/api-routes.enum";
import axios from "axios";
import TodayWeatherData from "../../models/TodayWeatherData";

const useCurrentWeather = (): TodayWeatherData => {
  const coords = useCoords();
  const [cityId, setCityId] = useState<number>(3477);
  const [apiRegisterReturn, setapiRegisterReturn] = useState<string>(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getCityId = async () => {
      if (coords) {
        try {
          const cityIdResponse = await useCityIdApi({
            latitude: (await coords).latitude.toString(),
            longitude: (await coords).longitude.toString()
          });
          setCityId(cityIdResponse.id);
        } catch (error) {
          console.error('Error fetching city id:', error);
        }
      } else {
        useCoords()
      }
    };
    getCityId();
  }, [coords]);

  useEffect(() => {
    const registerCity = async () => {
      if (cityId) {
        try {
          const apiRegisterReturn = await useRegisterCityApi(cityId.toString())
          setapiRegisterReturn(apiRegisterReturn)
        } catch (error) {
          console.error('Error register:', error);
        }
      }
    };
    registerCity();
  }, [cityId]); 
  
  useEffect(() => {
    const fetchTodayWeather = async () => {
      const CURRENT_WEATHER_URI = APIRoutes.BASE_URL + APIRoutes.CURRENT_WEATHER.replace(
        ':token',
        APIRoutes.TOKEN
      ).replace(
        ':id',
        cityId.toString()
      )
      try {
        const response = await axios.get<TodayWeatherData>(CURRENT_WEATHER_URI);
        if (response.data) {
          setWeatherData(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error('Error fetching weather:', CURRENT_WEATHER_URI);
        console.error('Error fetching weather:', error);
      }
    };
    fetchTodayWeather();
  }, [apiRegisterReturn]);

  return weatherData;
};

export default useCurrentWeather;