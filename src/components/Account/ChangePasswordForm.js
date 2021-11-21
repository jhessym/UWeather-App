import React ,{ useState, } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from 'firebase';
import { size } from "lodash";
import { reauthenticate } from "../../utils/api";
import { UWheatherTheme } from "../../constants/theme";

export default function ChangePasswordForm(props){
    const {setShowModal, toastRef}= props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultValue());
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (e,type) => {
        setFormData({...formData, [type] : e.nativeEvent.text});
    };

    const onSubmit = async() => {
        let isSetError = true;
        let errorsTemp = {};
        setErrors({});

       if(!formData.password || !formData.newPassword || !formData.repeatNewPassword){
        errorsTemp = {
            password:!formData.password ? 'La contraseña no puede estar vacia.' : '',
            newPassword:!formData.newPassword ? 'La contraseña no puede estar vacia.' : '',
            repeatNewPassword: !formData.repeatNewPassword ? 'La contraseña no puede estar vacia.' : '',
        };
       }else if(formData.newPassword !== formData.repeatNewPassword){
            errorsTemp = {
                newPassword:'Las contraseñas no son iguales.',
                repeatNewPassword:'Las contraseñas no son iguales.',
            };
       }else if(size(formData.newPassword) < 6){
           errorsTemp = {
            newPassword:'La contraseña tiene que ser mayor a 5 caracteres.',
            repeatNewPassword:'La contraseña tiene que ser mayor a 5 caracteres.',
           }
       }else {
           setIsLoading(true);
        await reauthenticate(formData.password)
            .then(async() => {
                await firebase
                .auth()
                .currentUser.updatePassword(formData.newPassword)
                .then(() =>{
                    isSetError = false;
                    setIsLoading(false);
                    setShowModal(false);
                    firebase.auth().signOut();
                
            }).catch(() =>{
                errorsTemp = {
                    other: 'Error al actualizar la contraseña',
                }
            })
        }).catch(() => {
            errorsTemp = {
                password:'La contraseña no escorrecta.',
               };
               setIsLoading(false);
        })
       }

       isSetError && setErrors(errorsTemp);
    };

    return(
        <View style={styles.view}>
              <Input
                placeholder='Contraseña actual'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showPassword ? false: true}
                rightIcon={{
                    type:'material-community',
                    name: showPassword ? 'lock-open-variant-outline':'lock',
                    color: '#c2c2c2',
                    onPress: () => setShowPassword(!showPassword),
                }}
                onChange={e => onChange(e,'password')}
                errorMessage={errors.password}
              /> 
              <Input
                placeholder='Nueva Contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showRepeatPassword ? false: true}
                rightIcon={{
                    type:'material-community',
                    name: showRepeatPassword ? 'lock-open-variant-outline':'lock',
                    color: '#c2c2c2',
                    onPress: () => setShowRepeatPassword(!showRepeatPassword),
                }}
                onChange={e => onChange(e,'newPassword')}
                errorMessage={errors.newPassword}
              /> 
              <Input
                placeholder='Repetir Nueva Contraseña'
                containerStyle={styles.input}
                password={true}
                secureTextEntry={showRepeatPassword ? false: true}
                rightIcon={{
                    type:'material-community',
                    name: showRepeatPassword ? 'lock-open-variant-outline':'lock',
                    color: '#c2c2c2',
                    onPress: () => setShowRepeatPassword(!showRepeatPassword),
                }}
                onChange={e => onChange(e,'repeatNewPassword')}
                errorMessage={errors.repeatNewPassword}
              /> 
              <Button
                title='Cambiar Contraseña'
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                onPress={onSubmit}
                loading={isLoading}
            />
             <Text>{errors.other}</Text>
        </View>
    )
}

function defaultValue(){
    return{
        password:'',
        newPassword: '',
        repeatNewPassword: '',
    }
}

const styles=StyleSheet.create({
    view: {
        alignItems:'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 1,
        width:'95%',
    },
    btn:{
        backgroundColor: UWheatherTheme.colors.secondary
    },

})