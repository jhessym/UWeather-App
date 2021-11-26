import React, {useRef} from "react";
import {StyleSheet, View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
    const toastRef= useRef();

    return(
        <KeyboardAwareScrollView>
           <Image 
           source={require('../../../assets/images/logo-principal.png')}
           resizeMode='contain'
           style={styles.logo}
           />
           <View style={styles.viewForm}>
               <RegisterForm toastRef={toastRef} />
           </View>
           <Toast ref={toastRef} position='center' opacity={0.9} fadeOutDuration={800}/>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height: 120,
        marginTop: 20,
    },
    viewForm:{
        marginRight:40,
        marginLeft: 40,
    },

});