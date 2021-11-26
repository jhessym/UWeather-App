import React, {useState} from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-elements";
import { UWheatherTheme } from "../../constants/theme";





export default function Weather() {
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })

   const navigation = useNavigation();
    
    const onSubmit = () => {
    navigation.navigate('searchcity');}

    return(
        <View style={styles.container}>
            <Button
                title='Ir a buscador de ciudad/clima'
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={ onSubmit}
             />
            <MapView style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            provider= "google"
            >
                <Marker coordinate={pin}
                pinColor="blue"
                draggable = {true}
                onDragEnd ={(e) => {
                    setPin({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude
                    })
                }}
                >
                    <Callout>
                        <Text>Pais</Text>
                    </Callout>
                </Marker>  
            </MapView>
            <Search/>
        </View>
    )
};

function Search(){
    const navigation = useNavigation();
    return(

            <Text 
            style={styles.btnSearch}
            onPress={() => navigation.navigate('searchcity')}
            >Click para buscar clima en diferentes ciudades
            </Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textRegister:{
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    btnSearch:{
        color: UWheatherTheme.colors.accent,
        fontWeight: 'bold'
    },
    btnContainerLogin:{
        borderTopColor: 'black',
        width: '95%',
        alignItems:'center'
    },
    btnLogin: {
        backgroundColor: UWheatherTheme.colors.secondary,
    },
});