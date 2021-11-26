import React from "react";
import{StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {Overlay} from 'react-native-elements';
import { UWheatherTheme } from "../constants/theme";

export default function Loading(props){
    const{isVisible, text} = props;

    return(
        <Overlay 
        isVisible={isVisible}
        windowBackgroundColor = 'rgba(0,0,0,0.5)'
        overlayBackgroundColor = 'transparent'
        overlayStyle = {styles.overlay}
        >
            <View style = {styles.view}>
                <ActivityIndicator size='large' color='#14067d'/>
                {text && <Text style = {styles.text}>{text}</Text>}
            </View>
    </Overlay>
    );
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderColor: UWheatherTheme.colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
    },
    view:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: UWheatherTheme.colors.secondary,
        textTransform: 'uppercase',
        marginTop: 10,
    },
});