import { ITextProps, VStack, Heading, HStack, Text, Pressable } from 'native-base'
import React from 'react'
import TodayWeatherData from '~/screens/home/models/TodayWeatherData';
import IconText from './IconText';
import WeatherImages from '../utils/WeatherImages';
import { Image } from 'react-native';
interface PrincipalWeatherProps extends ITextProps {
  weatherData: TodayWeatherData,
}

export function PrincipalWeather({ weatherData, ...rest }: PrincipalWeatherProps) {
  const img = WeatherImages[weatherData.data.icon]
  return (
    //TODO: implement navigation to weather details;
    <Pressable>
      <VStack space={3} alignItems={"center"} >
        <Image source={
          img
        } alt="Weather Icon" />
        <Heading size="3xl" >
          {weatherData.data.temperature + "°C"}
        </Heading>
        <Text fontSize="md">
          {weatherData.data.condition}
        </Text>
        <HStack alignContent="center" space={5} p={5}>
          <IconText iconName='droplet' text={weatherData.data.humidity + "%"} />
          <IconText iconName='wind' text={weatherData.data.wind_velocity + "km/h"} />
        </HStack>
      </VStack>
    </Pressable>
  )
}