import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { UWheatherTheme } from "../../constants/theme";


export default function Clima(props) {

    const { resultado } = props;

    const { name, main } = resultado;

    if (!name) return null;

    //grados Kelvin
    const kelvin = 273.15;
    
    console.log(resultado.name);
    console.log(resultado.main.temp);
    
    return (
        <View style={styles.clima}>
            <Text style={ [ styles.texto, styles.actual] }>
                {parseInt(main.temp - kelvin)}
                <Text style={styles.temperatura}>
                    &#x2103;
                </Text>
                <Image
                    style={{ width: 66, height: 58 }}
                    source={{uri: `https://openweathermap.org/img/w/${resultado.weather[0].icon}.png` }}
                />
            </Text>
            <View style={styles.temperaturas}>
                <Text style = { styles.texto}> Min {' '}
                    <Text style={styles.temperatura}>
                        { parseInt(main.temp_min-kelvin)} &#x2103;
                    </Text>
                </Text>

                <Text style = { styles.texto}> Max{' '}
                    <Text style={styles.temperatura}>
                        { parseInt(main.temp_max-kelvin)} &#x2103;
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clima: {
        marginBottom:20,
    },
    texto: {
        color: UWheatherTheme.colors.secondary,
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20,

    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold'
    },
    temperatura: {
        fontSize: 24,
        fontWeight: 'normal',
    },
    temperaturas: {
        flexDirection: 'row',
        justifyContent:'center',
    },


})