import React, {useState,useEffect} from "react";
import { StyleSheet, View, Dimensions, Text,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import FormularioCity from "../../components/Weather/FormularioCity";
import Clima from "../../components/Weather/Clima";

import { UWheatherTheme } from "../../constants/theme";

export default function SearchCity() {

    const [busqueda, guardarBusqueda] = useState(defaultFormValue);
    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [bgcolor, guardarBgColor] = useState(UWheatherTheme.colors.backgroundRaised);
    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarClima = async () => {
            if (consultar) {
             const appId = 'f4a6ce84f079e5f790c64af97ef2e2a8';
             const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
            
             try {
                 const respuesta = await fetch(url);
                 const resultado = await respuesta.json();
                 guardarResultado(resultado);
                 //console.log(resultado);
                 guardarConsultar(false);

                 //Modifica los colores de fondo basado en la temperatura

                 const kelvin = 273.15;
                 const { main } = resultado;
                 const actual = main.temp - kelvin;

                 if (actual < 12) {
                     guardarBgColor(UWheatherTheme.colors.cold);
                 } else if (actual >= 12 && actual <= 25) {
                     guardarBgColor(UWheatherTheme.colors.backgroundRaised);
                 } else {
                     guardarBgColor(UWheatherTheme.colors.surface); 
                 }
                
             }catch (error) {
                 mostrarAlerta();
              }
            }
        }
        consultarClima();

    }, [consultar]);

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'No hay resultados. Intenta con otra ciudad y pais',
            [{ text:'Entendido' }]
            
        )
    }

    const ocultarTeclado = () => {
        Keyboard.dismiss();
    }
    
    const bgColorSearchCity = {
        backgroundColor: bgcolor
    }

    return (
        <TouchableWithoutFeedback onPress={ () => ocultarTeclado()}>
            <View style={[styles.searchcity, bgColorSearchCity]}>
                <View style={styles.contenido}>
                    <Clima
                        resultado={resultado}
                    />
                    <FormularioCity
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar}
                    />
                </View>
        </View>
        </TouchableWithoutFeedback>

        
    );
    
}

function defaultFormValue() {
    return {
        ciudad: '',
        pais: '',
    };
}
const styles = StyleSheet.create({
    searchcity: {
        flex: 1,
        justifyContent: 'center',

    },
    contenido: {
        marginHorizontal: '2.5%',
    },

});
