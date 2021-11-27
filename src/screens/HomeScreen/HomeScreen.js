import React from "react";
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, ImageBackground, TouchableOpacity} from "react-native"
import styles from "./styles";

const logo = require("../../../assets/images/cloud-sun.png")
const background = require("../../../assets/images/background-light.png")

export default function Home() {
    const navigation = useNavigation();
    const navigateTo = () => {
    navigation.navigate('aboutUs');}

    return(
        <ImageBackground source={background} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.mainView}>
                <Image
                    style = {styles.image}
                    source={logo}
                />
                <View style= {styles.contentView}>
                    <Text style= {styles.title}>UWeather, <Text style= {styles.subtitle}>News & Feed</Text></Text>
                    <Text style= {styles.description}>Encuentra y descubre el clima en las diferentes partes del mundo. Es tu aplicación de pronóstico del tiempo</Text>
                </View>
                <TouchableOpacity 
                    style= {styles.coontainerTextButton}
                    onPress = {navigateTo}
                >
                    <Text style= {styles.textButton}>Conoce Quiénes Somos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}