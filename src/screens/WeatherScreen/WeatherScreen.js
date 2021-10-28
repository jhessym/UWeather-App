import React, {useState} from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

export default function Weather() {
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })
    return(
        <View style={styles.container}>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});