import React,{ useState } from "react";
import { StyleSheet,View} from "react-native";
import { ListItem , Icon} from "react-native-elements";
import { map } from "lodash";
import Modal from "./Modal";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";

import { UWheatherTheme } from "../../constants/theme";

export default function AccountOptions(props){

    const { userInfo, toastRef,setReloadUserInfo } = props;

    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);
   
    const selectComponent = (key) => {
        switch(key) {
            case 'displayName':
                setRenderComponent(
                    <ChangeDisplayNameForm
                        displayName={userInfo.displayName}
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setReloadUserInfo={setReloadUserInfo}
                     />
                );
                setShowModal(true);
                break;
            case 'email':
                setRenderComponent(
                    <ChangeEmailForm
                    email={userInfo.email}
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                    setReloadUserInfo={setReloadUserInfo}
                 />
                );
                setShowModal(true);
                break;
            case 'password':
                setRenderComponent(
                    <ChangePasswordForm
                    password={userInfo.password}
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                 />
                );
                setShowModal(true);
                break;
            default:
                setRenderComponent(null);
                setShowModal(false);
                break;
        }
    };

 const menuOptions = generateOptions(selectComponent);

    return(
        <View>
            {map(menuOptions, (menu,index) => (
                <ListItem 
                key={index}
                bottonDivider 
                onPress={menu.onPress}
                containerStyle={styles.menuItem}
                >
                    <Icon
                    type={menu.icontype}
                    name={menu.iconNameLeft}
                    color={menu.iconColorLeft}
                    />
                <ListItem.Content>
                    <ListItem.Title>{menu.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={30}/>
             </ListItem>
            ))}

            {renderComponent &&(
             <Modal isVisible={showModal} setIsVisible={setShowModal} >
               {renderComponent}               
            </Modal>        
            )}

        </View>
    );
}

function generateOptions(selectComponent){
    return [
        {
            title: 'Cambiar Nombre y Apellido',
            icontype:'material-community',
            iconNameLeft: 'account-circle',
            iconColorLeft: '#ccc',
            onPress: () => selectComponent('displayName')
        },
        {
            title: 'Cambiar Email',
            icontype:'material-community',
            iconNameLeft: 'at',
            iconColorLeft: '#ccc',
            onPress: () => selectComponent('email')
        },
        {
            title: 'Cambiar Contraseña',
            icontype:'material-community',
            iconNameLeft: 'lock',
            iconColorLeft: '#ccc',
            onPress: () => selectComponent('password')
        },
    ];
}

const styles = StyleSheet.create({
    menuItem:{
        borderBottomWidth: 1 ,
        borderBottomColor: UWheatherTheme.colors.secondary,
    },
})