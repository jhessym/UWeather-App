import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";

import AccountStack from './AccountStack';

import HomeStack from "./HomeStack";

import WeatherStack from "./WeatherStack";


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName = "home"
                screenOptions = {
                    ({ route }) => ({
                   tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen 
                    name = "home" 
                    component= {HomeStack} 
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarInactiveTintColor: "#686868",
                        tabBarActiveTintColor: "#219EBC"}

                }/>
                <Tab.Screen 
                    name = "weather" 
                    component= {WeatherStack} 
                    options={{
                        tabBarLabel: "Weather",
                        headerShown: false,
                        tabBarInactiveTintColor: "#686868",
                        tabBarActiveTintColor: "#219EBC"

                    }
                }/>
                <Tab.Screen 
                    name = "account" 
                    component= {AccountStack} 
                    options={{
                        tabBarLabel: "Account",
                        headerShown: false,
                        tabBarInactiveTintColor: "#686868",
                        tabBarActiveTintColor: "#219EBC"

                    }
                }/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName;

    switch (route.name) {
        case "home":
            iconName = "home-outline"
            break;
        case "weather":
            iconName = "compass-outline"
            break;
        case "account":
            iconName = "account-circle"
            break;

        default:
            break;
    }
    return(
        <Icon type= "material-community" name={iconName} size= {22} color= {color}/>           
    )
};

