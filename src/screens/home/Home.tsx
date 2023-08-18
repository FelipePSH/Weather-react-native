import React, { useState, useEffect } from 'react';
import { VStack, Text, Box, Flex, Divider, Heading, Image } from 'native-base';
import useCurrentWeather from './hooks/useCurrentWeather';
import TodayWeatherData from './models/TodayWeatherData';
import { Loading } from '../../components/Loading';
import { Locale } from '../../components/Locale';
import { PrincipalWeather } from '../../components/PrincipalWeather';
import MockedTodayWeatherData from './dummy/MockedTodayWeatherData';

const Home = () => {
  const weatherData: MockedTodayWeatherData | null = new MockedTodayWeatherData();

  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} padding={5} _light={{
      bg: "bgLight"
    }} _dark={{
      bg: "bgDark"
    }}>
      {weatherData ? (
        <>
          <Locale city={weatherData.name} country={weatherData.country} state={weatherData.state} />

          <VStack flex={1} justifyContent={'center'} alignItems={'center'} >
            <PrincipalWeather weatherData={weatherData} />
          </VStack>
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
