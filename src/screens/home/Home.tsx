import React, { useState, useEffect } from 'react';
import { ScrollView } from 'native-base';
import { VStack, Text, Box, Flex, Divider, Heading, Image, HStack, Icon, Spacer } from 'native-base';
import { MaterialCommunityIcons, AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import useCurrentWeather from './hooks/useCurrentWeather';
import TodayWeatherData from '../models/TodayWeatherData';
import Loading from '../../components/Loading';
import { Locale } from '../../components/Locale';
import { PrincipalWeather } from '../../components/PrincipalWeather';
import MockedTodayWeatherData from '../dummy/MockedTodayWeatherData';
import { Pressable } from 'react-native';
import ForecastCard from '../../components/ForecastCard';
import configureLayoutByIcon from '../../hooks/configureLayoutByIcon';

const Home = ({ navigation }: any) => {
  const weatherData: MockedTodayWeatherData | null = new MockedTodayWeatherData();
  const configureLayoutByIconValues = configureLayoutByIcon(weatherData.data.icon);
  return (
    <VStack flex={1} justifyContent={'center'} alignItems={'center'} padding={2}
      background={configureLayoutByIconValues.backgroundColor}
      safeArea>
      {weatherData ? (
        <>
          <Locale textColor={configureLayoutByIconValues.textColor} city={weatherData.name} country={weatherData.country} state={weatherData.state} />
          <VStack flex={1} justifyContent={'center'} alignItems={'center'} >
            <Pressable onPress={() => navigation.navigate('WeatherDetails')}>
              <PrincipalWeather textColor={configureLayoutByIconValues.textColor} weatherData={weatherData} />
            </Pressable>
          </VStack>
          <HStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} paddingX={1} marginBottom={10}>
              {Array.from({ length: 10 }).map((_, index) => (
                <ForecastCard key={index} background={configureLayoutByIconValues.cardColor}
                  textColor={configureLayoutByIconValues.textColor} icon={configureLayoutByIconValues.iconName}
                  temperature={weatherData.data.temperature}
                  time={'12:30'}
                />
              ))}
            </ScrollView>
          </HStack>
        </>
      ) : (
        <VStack space={8} justifyContent="center" alignItems={'center'}>
          <Loading textColor={configureLayoutByIconValues.textColor} spinnerColor={configureLayoutByIconValues.textColor} />
        </VStack>
      )}
    </VStack>
  );
};
export default Home;


/*
{
    "id": 3477,
    "name": "São Paulo",
    "state": "SP",
    "country": "BR  ",
    "data": {
        "temperature": 25,
        "wind_direction": "NNE",
        "wind_velocity": 9,
        "humidity": 39,
        "condition": "Alguma nebulosidade",
        "pressure": 1012,
        "icon": "2n",
        "sensation": 25,
        "date": "2023-08-18 21:53:49"
    }
}

*/