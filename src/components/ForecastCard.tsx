import React from 'react';
import { Box, Text, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface ForecastCardProps {
  background: string;
  textColor: string;
  icon: string;
  temperature: number;
  time: string;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  background,
  textColor,
  icon,
  temperature,
  time,
}) => {
  return (
    <Box
      background={background}
      alignItems="center"
      marginX={2}
      paddingX={5}
      opacity={0.8}
      rounded="lg"
    >
      <Text paddingY={2} fontSize="xl" fontWeight="700" color={textColor}>
        {time}
      </Text>
      <Icon
        as={Feather}
        name={icon}
        size={16}
        color={textColor}
        marginX={3}
      />
      <Text paddingY={2} fontSize="2xl" fontWeight="800" color={textColor}>
        {temperature}
      </Text>
    </Box>
  );
};

export default ForecastCard;
