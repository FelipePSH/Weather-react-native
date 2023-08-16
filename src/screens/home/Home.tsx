import React, { useState, useEffect, useCallback } from 'react';
import { VStack, Text } from 'native-base';
import { getUserLocation } from './hooks/getUserLocation';

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
  
  const [userWeather, setUserWeather] = useState<Weather | null>(null);


  const [userLocation, setUserLocation] = useState<UserLocationInterface | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const location = await getUserLocation(); //tonar em um hook global useCoords 
      setUserLocation(location)
    };
    fetchData();
  }, [userWeather]);
  //Ler sobre useEffect 


  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'}> 
      <Text>Weather Information:</Text>
      {userWeather ? ( 
        <>
          <Text>COUNTRY: {userWeather.country}</Text>
          <Text>STATE: {userWeather.state}</Text>
          <Text>ID: {userWeather.id}</Text>
        </>
      ): null} 
    </VStack>
  );
};

export default Home;
