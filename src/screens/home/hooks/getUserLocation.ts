import { LocationAccuracy, requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

export async function getUserLocation() {
  const { granted } = await requestForegroundPermissionsAsync();
  if (granted) {
    try {
      const position = await getCurrentPositionAsync({
        accuracy: LocationAccuracy.High,
      });
      const { latitude, longitude } = position.coords;
      return { latitude, longitude };
    } catch (error) {
      console.log(error.code, error.message);
      return null;
    }
  } else {
    console.log('Permission denied');
    return null;
  }
}