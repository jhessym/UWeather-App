import { StyleSheet } from "react-native"
import { UWheatherTheme } from "../../constants/theme"

export default StyleSheet.create({
    backgroundImage: {
        width: '100%', 
        height: '100%'
    },
    mainView: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25
    },
    topContent: {
        flexDirection: "row"
    },
    containerTitle: {
        height: 150,
        justifyContent: 'center',
        textAlign: "center",
        paddingRight: 25
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
        paddingBottom: 20,
        color: UWheatherTheme.colors.secondary
    },
    subTitle: {
        fontSize: 18,
        color: UWheatherTheme.colors.surface,
        fontWeight: "bold",
        marginBottom: 10
    },
    subTitleRight: {
        fontSize: 18,
        color: UWheatherTheme.colors.primary,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "right"
    },
    description: {
        fontSize: 16
    },
    coontainerTextButton: {
        marginTop: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: UWheatherTheme.colors.placeholder,
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    }
})