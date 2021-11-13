import React from "react";
import {View, Text, Button} from 'react-native';
import * as firebase from "firebase";

export default function UserLogged(){

    return(
        <View>
            <Text>UserLogged...</Text>

            <Button title='Cerrar Sesion'onPress={() => firebase.auth().signOut()}/>
        </View>
    );
}