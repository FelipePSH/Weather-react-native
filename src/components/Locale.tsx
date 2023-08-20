import { ITextProps, Box, Text, Flex, Divider, useColorMode} from 'native-base'
import { ReactNode } from 'react'

interface LocaleProps extends ITextProps {
  city: ReactNode,
  state: ReactNode,
  country: ReactNode,
  textColor: string
}

export function Locale({ city, 
  state, 
  country, 
  textColor = 'coolGray.800', 
  ...rest }: LocaleProps) {
  return (
    <Box alignItems="center" color={textColor}>
      <Flex direction="row" h="58" p="4">
        <Text fontWeight={'bold'} color={textColor}>{country}</Text>
        <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight={'bold'} color={textColor}>{city}</Text>
        <Divider bg="indigo.500" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight={'bold'} color={textColor}>{state}</Text>
      </Flex>
    </Box>
  );
}