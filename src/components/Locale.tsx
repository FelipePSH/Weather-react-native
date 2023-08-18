import { ITextProps, Box, Text, Flex, Divider, useColorMode} from 'native-base'
import { ReactNode } from 'react'

interface LocaleProps extends ITextProps {
  city: ReactNode,
  state: ReactNode,
  country: ReactNode
}

export function Locale({ city, state, country, ...rest }: LocaleProps) {
  return (
    <Box alignItems="center">
      <Flex direction="row" h="58" p="4">
        <Text fontWeight={'bold'}>{country}</Text>
        <Divider bg="emerald.500" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight={'bold'}>{city}</Text>
        <Divider bg="indigo.500" thickness="2" mx="2" orientation="vertical" />
        <Text fontWeight={'bold'}>{state}</Text>
      </Flex>
    </Box>
  );
}