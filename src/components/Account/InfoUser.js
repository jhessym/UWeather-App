import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar} from 'react-native-elements';
import * as firebase from "firebase";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { UWheatherTheme } from '../../constants/theme';


export default function InfoUser(props){
    const {
        userInfo: { uid, photoURL, displayName, email },
        toastRef, setLoadingText, setLoading,
      } = props;
     
      const handleOnAvatarEditPress = async () => {
        const resultPermission = await MediaLibrary.requestPermissionsAsync();
        const resultPermissionCamera = resultPermission.status;

        if (resultPermissionCamera === 'denied'){
            toastRef.current.show('Es necesario aceptar los persmisosd de la galeria');
        }else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3]
            });

            if(result.cancelled){
                toastRef.current.show('Has cerrado la seleccion de imagenes');
            }else{
                uploadImage(result.uri).then(() => {
                    updateFotoUrl();
                    console.log('Imagen subida.');
                })
                .catch(() => {
                    toastRef.current.show('Error al actualizar el avatar.');
                })
            }
        }
      };

      const uploadImage = async (uri) => {
        setLoadingText('Actualizando Avatar');
        setLoading(true);

          const response = await fetch(uri);
          const blob = await response.blob();
          const ref = firebase.storage().ref().child( `avatar/${uid}` );
          return ref.put(blob);

      };

      const updateFotoUrl = () => {
          firebase
          .storage()
          .ref(`avatar/${uid}`)
          .getDownloadURL()
          .then(async (response) =>{
            const update = {
                photoURL: response
            };
            await firebase.auth().currentUser.updateProfile(update);
            setLoading(false);

          })
          .catch(() =>{
              toastRef.current.show('Error al actualizar el avatar.');
          });
      }

    return(
        <View style={styles.viewUserInfo} >
            <Avatar
            size= 'large'
            rounded
             source={
                photoURL
                ? {uri: photoURL }
                : require('../../../assets/images/avatar-default.jpg')
            }             
            containerStyle= { styles.userInfoAvatar}
            >
                <Avatar.Accessory size={23} onPress={handleOnAvatarEditPress}/>
            </Avatar>
        

            <View>
                <Text style = {styles.displayName} >
                    { displayName ? displayName : 'Anónimo' }
                </Text>
                <Text>
                    { email ? email : 'Social Login'}
                </Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewUserInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 30,

    },
    userInfoAvatar: {
        marginHorizontal: 10,
        backgroundColor: UWheatherTheme.colors.backgroundRaised,
    },
    accessory:{
        borderRadius: 50,
        width: "30%",
        height: "30%",
        backgroundColor: UWheatherTheme.colors.secondary,
    },
    displayName:{
        fontWeight: 'bold',
        paddingBottom: 7.5,
    },
})
