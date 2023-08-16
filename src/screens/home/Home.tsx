import React, { useState, useEffect, useCallback } from 'react';
import { VStack, Text } from 'native-base';
import { getUserLocation } from './hooks/getUserLocation'; // Certifique-se de ajustar o caminho para o local correto
import { fetchWeatherApi } from './hooks/fetchWeatherApi';
import { wait } from '@testing-library/user-event/dist/utils';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

interface UserLocationInterface {
  latitude: number,
  longitude: number
}

interface Weather {
  id: number; 
  name: string;
  state: string;
  country: string;
}

const Home = () => {
  const [userLocation, setUserLocation] = useState<UserLocationInterface | null>(null);
  const [userWeather, setUserWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const location = await getUserLocation();
      setUserLocation(location)
      if(userLocation){
        const fetchWeather = async () => {
          const location = await fetchWeatherApi({
            latitude: userLocation.latitude,
            longitude: userLocation.longitude
          });
          setUserWeather(location)
        };
        fetchWeather();
      } else{
        fetchData();
      }
    };
    fetchData();
  }, []);
  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'}> 
      <Text>Weather Information:</Text>
      {userWeather && (
        <>
          <Text>COUNTRY: {userWeather.country}</Text>
          <Text>STATE: {userWeather.state}</Text>
          <Text>ID: {userWeather.id}</Text>
        </>
      )}
      {/* Adicione aqui o restante das informações do clima */}
    </VStack>
  );
};

export default Home;
