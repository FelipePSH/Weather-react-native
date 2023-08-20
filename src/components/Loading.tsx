import React from 'react';
import { Spinner, Heading} from 'native-base'


interface LoadingProps {
  spinnerColor: string;
  textColor: string
}

const Loading: React.FC<LoadingProps> = ({
  spinnerColor = 'primary.500',
  textColor = 'primary.500',
}) => {
  return(
    <>
    <Spinner size="lg" color={spinnerColor} accessibilityLabel="Loading" />
    <Heading color={textColor} fontSize="md">
      Loading
    </Heading>
    </>
  )
}
export default Loading;
