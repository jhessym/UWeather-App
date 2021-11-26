import React from "react";
import { StyleSheet } from "react-native";
import {Overlay } from 'react-native-elements';

export default function Modal(props) {
    const { isVisible, setIsVisible, children} = props;

    return(
        <Overlay
         isVisible={isVisible}
        >
            {children}
        </Overlay>
    )
}

const styles = StyleSheet.create({


})