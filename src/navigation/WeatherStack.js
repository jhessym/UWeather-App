import React from "react";
import{ createNativeStackNavigator} from '@react-navigation/native-stack';
import Weather from '../screens/WeatherScreen/WeatherScreen';

const Stack = createNativeStackNavigator();

export default function WeatherStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='weather1'
            component={Weather}
            options={{title: 'Tiempo'}}
            />

        </Stack.Navigator>
    );

}