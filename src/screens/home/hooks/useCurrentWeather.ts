import { useState, useEffect } from "react";
import { useCoords } from "../../../hooks/useCoords";
import { useCityIdApi } from "../../../hooks/useCityIdApi";
import { APIRoutes } from "../../../api/api-routes.enum";
import axios from "axios";
import TodayWeatherData from "../models/TodayWeatherData";

const useCurrentWeather = (): TodayWeatherData => {
  const coords = useCoords();
  const [cityId, setCityId] = useState<number>(3477);
  const [apiRegisterReturn, setapiRegisterReturn] = useState<string>(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    //Com a Latitude e a longitude é necessário pegar o id da cidade na api
    const fetchData = async () => {
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
    fetchData();
  }, [coords]);


  /*useEffect(() => {
    //Com o ID da cidade é necessario registrar a cidade no token
    const fetchData = async () => {
      if (cityId) {
        try {
          const cityIdResponse = await useRegisterCityApi(cityId.toString())
          setapiRegisterReturn(cityIdResponse)
        } catch (error) {
          console.error('Error register:', error);
        }
      }
    };
    fetchData();
  }, [cityId]);  */

  //Com a cidade registrada, é possível realizar a requizição
  // novo useState para gerenciar o resultado vindo da API de registro
  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [cityId]);

  return weatherData;
};

export default useCurrentWeather;