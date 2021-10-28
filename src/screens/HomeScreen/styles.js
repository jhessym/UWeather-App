import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
        tintColor: "blue"
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
        color: "blue"
    },
    description: {
        fontSize: 18,
        textAlign: "center"
    }
})