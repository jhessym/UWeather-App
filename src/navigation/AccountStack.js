import React from "react";
import{ createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../screens/AccountScreen/Account';
import Login from "../screens/AccountScreen/Login";
import Register from "../screens/AccountScreen/Register";

const Stack = createNativeStackNavigator();

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='account2'
            component={Account}
            options={{title: 'Cuenta'}}
            />
            <Stack.Screen
            name='login'
            component={Login}
            options={{title: 'Iniciar sesión'}}
            />
            <Stack.Screen
            name='register'
            component={Register}
            options={{title: 'Registro'}}
            />

        </Stack.Navigator>
    );

}