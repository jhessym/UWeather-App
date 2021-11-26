import React from "react";
import{ createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='home2'
            component={Home}
            options={{title: 'Home'}}
            />

        </Stack.Navigator>
    );

}