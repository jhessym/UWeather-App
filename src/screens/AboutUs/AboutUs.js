import React from "react";
import {View, Text, Image, ImageBackground, TouchableOpacity, Linking} from "react-native"
import styles from "./styles";

const logo = require("../../../assets/images/storm.png")
const background = require("../../../assets/images/background-light.png")

export default function AboutUs() {
    const navigateToLink = ()=> { Linking.openURL('https://glass-circle-ee1.notion.site/UWeather-54e453f9b03a4430a50274972e31db57')}
    return(
        <ImageBackground source={background} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.mainView}>
                <View style={styles.topContent}>
                    <View style= {styles.containerTitle}>
                        <Text style= {styles.title}>Conócenos</Text>
                    </View>
                    <Image
                        style = {styles.image}
                        source={logo}
                    />
                </View>
            
                <View style= {styles.contentView}>
                    <Text style= {styles.subTitle}>¿Cómo surgió el proyecto?</Text>
                    <Text style= {styles.description}>El proyecto se planteó ante la necesidad de una cliente que trabaja vendiendo helados al aire libre, y require de una aplicación que le provea el clima para poder prepararse adecuadamente para su día de trabajo</Text>
                </View>

                <View style= {styles.contentView}>
                    <Text style= {styles.subTitleRight}>Equipo</Text>
                    <Text style= {[styles.description, { textAlign: "right" }]}>Grupo 51</Text>
                    <Text style= {[styles.description, { textAlign: "right" }]}>Carlos Vivas y Jhessy Millán</Text>
                </View>

                <View style= {styles.contentView}>
                    <Text style= {styles.subTitle}>Herramientas</Text>
                    <Text style= {styles.description}>Hacé tap y conoce las  <TouchableOpacity onPress={navigateToLink}><Text style= {styles.buttonText}>Herramientas</Text></TouchableOpacity>  que usamos</Text>
                </View>
            </View>
        </ImageBackground>
    )
}