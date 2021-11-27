import React from "react";
import{ createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen/HomeScreen';
import AboutUs from "../screens/AboutUs/AboutUs";

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='home2'
            component={Home}
            options={{title: 'Home'}}
            />
            <Stack.Screen
            name='aboutUs'
            component={AboutUs}
            options={{title: 'About Us'}}
            />
        </Stack.Navigator>
    );

}