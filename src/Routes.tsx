import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/home/Home";
import WeatherDetails from "./screens/weatherDetails/WeatherDetails";

const Stack = createNativeStackNavigator();
export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="WeatherDetails" component={WeatherDetails} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}