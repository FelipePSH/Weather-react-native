import React, { useState, useEffect } from 'react';
import { VStack, Text, Box, Flex, Divider, Heading, Image, HStack, Button } from 'native-base';
import Loading  from '../../components/Loading';
import { Locale } from '../../components/Locale';
import { PrincipalWeather } from '../../components/PrincipalWeather';
import MockedTodayWeatherData from '../dummy/MockedTodayWeatherData';
import { StyleSheet } from 'react-native';
import useColorByIcon from '../../hooks/useColorByIcon';
import { background } from 'native-base/lib/typescript/theme/styled-system';

const WeatherDetails = ({ navigation }: any) => {
  const weatherData: MockedTodayWeatherData | null = new MockedTodayWeatherData();
  const background = useColorByIcon(weatherData.data.icon);
  const textColor = { color: background.color };
  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} padding={2} 
    backgroundColor={'blue.600'} safeArea>
      {weatherData ? (
        <>
          <Locale city={weatherData.name} country={weatherData.country}
           state={weatherData.state} 
          textColor={textColor.color}/>
          <VStack flex={1} justifyContent={'center'} alignItems={'center'} >

              <Loading textColor={textColor.color} spinnerColor={background.color}/>

          </VStack>
        </>

      ) : (
        <VStack space={8} justifyContent="center" alignItems={'center'}>
          <Loading  textColor='' spinnerColor=''/>
        </VStack>
      )}
    </VStack>

  );
};

export default WeatherDetails;