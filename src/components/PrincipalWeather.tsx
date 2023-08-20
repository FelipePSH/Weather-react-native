import { ITextProps, VStack, Heading, HStack, Text } from 'native-base'
import React from 'react'
import TodayWeatherData from '../screens/models/TodayWeatherData';
import IconText from './IconText';
import { Image } from 'react-native';
import WeatherImages from '../utils/WeatherImages';
  
interface PrincipalWeatherProps extends ITextProps {
  weatherData: TodayWeatherData,
  textColor: string,
}

export function PrincipalWeather({ weatherData, textColor, ...rest }: PrincipalWeatherProps) {
  const img = WeatherImages[weatherData.data.icon]
  return (
      <VStack space={3} alignItems={"center"} color={textColor} >
        <Heading color={textColor} >
          Today
        </Heading >
        <Image source={
          img
        } alt="Weather Icon" />
        <Heading size="3xl" color={textColor} >
          {weatherData.data.temperature + "°C"}
        </Heading>
        <Text fontSize="md" color={textColor}>
          {weatherData.data.condition}
        </Text>
        <HStack alignContent="center" space={5} p={5}>
          <IconText textColor={textColor} iconColor={textColor} iconName='droplet' text={weatherData.data.humidity + "%"} />
          <IconText textColor={textColor} iconColor={textColor}  iconName='wind' text={weatherData.data.wind_velocity + "km/h"} />
        </HStack>
      </VStack>
  )
}