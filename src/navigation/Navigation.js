import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from "react-native-elements"

import HomeScreen from "../screens/HomeScreen/HomeScreen"
import Account from '../screens/AccountScreen/Account'
import WeatherScreen from "../screens/WeatherScreen/WeatherScreen"


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName = "home"
                screenOptions = {{
                    inactiveTintColor: "#646464",
                    activeTintColor: "#00a680"
                }}
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen 
                    name = "home" 
                    component= {HomeScreen} 
                    options={{title: "Home"}
                }/>
                <Tab.Screen 
                    name = "weather" 
                    component= {WeatherScreen} 
                    options={{title: "Weather"}
                }/>
                <Tab.Screen 
                    name = "account" 
                    component= {Account} 
                    options={{title: "Account"}
                }/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName

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
}