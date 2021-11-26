import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Text, TextInput, Picker, TouchableWithoutFeedback, Animated,Alert } from 'react-native';


import { UWheatherTheme } from "../../constants/theme";

export default function FormularioCity(props) {

    const { busqueda, guardarBusqueda,guardarConsultar } = props;
    const { pais, ciudad } = busqueda;

    const [animacionBoton] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if (pais.trim() === '' || ciudad.trim() === '') {
            mostrarAlerta();
            return;
        }
        //consultar la API
        guardarConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega una ciudad y país para la búsquedad',
            [{ text:'Entendido' }]
            
        )
    }

    const animacionEntrada = () => {
        Animated.spring(animacionBoton, {
            toValue: .9,
  /*           duration: 500, */
            useNativeDriver: true,
        }).start();
    };
    const animacionSalida = () => {
        Animated.spring(animacionBoton, {
            toValue: 1,
            /* duration: 500, */
            friction: 5,
            tension:30,
            useNativeDriver: true,
        }).start();
    };

    const estiloAnimacion = {
        transform: [{ scale: animacionBoton }]
    };

    return (
        <View style={styles.formulario}> 
            <View>
                <TextInput
                    value={ciudad}
                    style={styles.input}
                    onChangeText={ ciudad => guardarBusqueda({...busqueda,ciudad})}
                    placeholder='Ciudad'
                    placeholderTextColor={UWheatherTheme.colors.text}
                />
            </View>
            <View style={{ backgroundColor: UWheatherTheme.colors.background}}> 
                <Picker
                    selectedValue={pais}
                    style={styles.picker}
                    onValueChange= { pais => guardarBusqueda({...busqueda, pais})}
 
                >
                    <Picker.Item label='---Seleccione un país---' value='' color={UWheatherTheme.colors.text} />
                    <Picker.Item label='Estados Unidos' value='US' />
                    <Picker.Item label='México' value='MX' />
                    <Picker.Item label='Argentina' value='AR' />
                    <Picker.Item label='España' value='ES' />
                    <Picker.Item label='Venezuela' value='VE' />
                    <Picker.Item label='India' value='IN'/>
                </Picker>
            </View>
            <TouchableWithoutFeedback
                onPressIn={ () => animacionEntrada()}
                onPressOut={() => animacionSalida()}
                onPress={ () => consultarClima()}
            >
                <Animated.View style={[ styles.btnBuscar, estiloAnimacion ]}>
                    <Text style={styles.textoBuscar}>
                        Buscar Clima
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
        
    );
    
}


const styles = StyleSheet.create({
    formulario: {
        marginTop: 20,
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: UWheatherTheme.colors.background,
        fontSize: 20,
        marginBottom: 20,
        textAlign:'center',
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: UWheatherTheme.colors.secondary,
        padding: 10,
        justifyContent: 'center'
    },
    textoBuscar: {
        color: UWheatherTheme.colors.background,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 15,
        
    },
    picker: {
        height: 100,
        color: UWheatherTheme.colors.text,
        textAlign: 'center',
    },

})