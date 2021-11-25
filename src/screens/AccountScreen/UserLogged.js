import React,{ useRef, useState, useEffect} from "react";
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import { UWheatherTheme } from "../../constants/theme";
import InfoUser from "../../components/Account/InfoUser";
import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogged(){
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('');
    const [reloadUserInfo, setReloadUserInfo] = useState(false);
    const toastRef= useRef();

    useEffect(() => {
        (async () =>{
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
        })();
        setReloadUserInfo(false);
    }, [reloadUserInfo]);


    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            {userInfo && <InfoUser 
                                userInfo={userInfo} 
                                toastRef={toastRef} 
                                setLoading={setLoading}
                                setLoadingText={setLoadingText}
                                />}
            
            <AccountOptions userInfo={userInfo} toastRef={toastRef} setReloadUserInfo={setReloadUserInfo} />

            <View style = {styles.viewBtn}>
                <Button 
                    title='Cerrar Sesion'
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => firebase.auth().signOut()} 
                />
            </View>
            <Toast ref={toastRef} position='center' opacity={0.9} />
            <Loading text={loadingText} isVisible={loading} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        minHeight: '100%',
        backgroundColor:UWheatherTheme.colors.background,
    },
    viewBtn:{
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
    },
    btnStyle:{
        backgroundColor: UWheatherTheme.colors.secondary,
        borderRadius: 0,


    },
    btnContainer:{
        width: '70%',
    },
});

