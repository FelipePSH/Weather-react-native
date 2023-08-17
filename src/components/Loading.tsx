import { Spinner, Heading} from 'native-base'

export function Loading(){
  return(<>
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="md">
      Loading
    </Heading>
    </>
  )
}
