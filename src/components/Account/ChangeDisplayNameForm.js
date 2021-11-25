import React ,{ useState, } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from 'firebase';

import { UWheatherTheme } from "../../constants/theme";

export default function ChangeDisplayNameForm(props){
    const {displayName,setShowModal, toastRef,setReloadUserInfo }=props;
    const [newDisplayName, setNewDisplayName] = useState(displayName());
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = () => {
        setError(null);
        if(!newDisplayName){
            setError('El Nombre No Puede Estar Vacio');
        }else if(displayName === newDisplayName.trim()){
            setError('El Nombre No Puede Ser Igual Al Actual');
        }else{
            setIsLoading(true);
            const update = { 
                displayName: newDisplayName,
             };

            firebase
            .auth().currentUser.updateProfile(update)
            .then(() => {
                setIsLoading(false);
                setReloadUserInfo(true);
                setShowModal(false);
                console.log('Ok');
            })
            .catch(() => {
                setError('Error Al Actualizar El Nombre.');
                setIsLoading(false);
            });
        }

    };

    return(
        <View style={styles.view}>
           <Input
           placeholder='Nombre y Apellido'
           containerStyle={styles.input}
           rightIcon={{
               type:'material-community',
               name:'account-circle-outline',
               color: '#c2c2c2'
           }}
           defaultValue={displayName || ''}
           onChange={e => setNewDisplayName(e.nativeEvent.text)}
           errorMessage={error}
           />
           <Button
           title='Cambiar Nombre'
           containerStyle={styles.btnContainer}
           buttonStyle={styles.btn}
           onPress={onSubmit}
           loading={isLoading}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,

    },
    input:{
        marginBottom: 10,

    },
    btnContainer:{
        marginTop: 1,
        width:'95%',
    },
    btn:{
        backgroundColor: UWheatherTheme.colors.secondary
    },

})