import { StyleSheet } from "react-native"
import { UWheatherTheme } from "../../constants/theme"

export default StyleSheet.create({
    backgroundImage: {
        width: '100%', 
        height: '100%'
    },
    mainView: {
        flex: 1,
        alignItems: "center",
        marginLeft: 25,
        marginRight: 25,
        marginTop: 120
    },
    image: {
        width: 150, 
        height: 150, 
        resizeMode: 'contain'
    },
    contentView: {
        marginTop: 40
    },
    title: {
        fontSize: 39,
        textAlign: "center",
        paddingBottom: 20
    },
    subtitle: {
        color: UWheatherTheme.colors.primary
    },
    description: {
        fontSize: 18,
        textAlign: "center"
    }
})