import React from "react";
import {View, Text, Image} from "react-native"
import styles from "./styles";

const logo = require("../../../assets/images/logo.png")

export default function Home() {
    return(
        <View style={styles.mainView}>
            <Image
                style = {styles.image}
                source={logo}
            />
            <View style= {styles.contentView}>
                <Text style= {styles.title}>UWeather, <Text style= {styles.subtitle}>News & Feed</Text></Text>
                <Text style= {styles.description}>Industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</Text>
            </View>
        </View>
    )
}