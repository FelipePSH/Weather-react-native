import React, { useState, useEffect } from 'react';
import { VStack, Text, Box, Flex, Divider, Heading, Image} from 'native-base';
import useCurrentWeather from './hooks/useCurrentWeather';
import TodayWeatherData from './models/TodayWeatherData';
import { Loading } from '~/components/Loading';

const Home = () => {
  const weatherData: TodayWeatherData | null = useCurrentWeather(); 

  return (
    <VStack flex={1} justifyContent={'start'} alignItems={'center'} padding={5}>
      {weatherData ? (
        <>
        <Box alignItems="center" p={3}>
          <Flex direction="row" h="8">
            <Heading size="xl">{weatherData.country}</Heading>
            <Divider bg="emerald.500" thickness="2" mx="5" orientation="vertical" />
            <Heading size="xl">{weatherData.state}</Heading>
          </Flex>
        </Box>

        <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
          <Text>Pressure: {weatherData.data.icon} hPa</Text>
          <Heading size="3xl">{weatherData.data.temperature}°C</Heading >
        </VStack>
          
          <Text>Condition: {weatherData.data.condition}</Text>
          <Text>Wind: {weatherData.data.wind_direction} {weatherData.data.wind_velocity} km/h</Text>
          <Text>Humidity: {weatherData.data.humidity}%</Text>
          <Text>Pressure: {weatherData.data.pressure} hPa</Text>
        </>
      ) : (
        <VStack space={8} justifyContent="center" alignItems={'center'}>
            <Loading />
        </VStack>
      )}
    </VStack>
  );
};

export default Home;
