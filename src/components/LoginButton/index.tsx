import React from "react";
import { Text, Image, ActivityIndicator, View, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { AntDesign } from "expo-vector-icons";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    onButtonPress?: () => void;
    whatIcon: string;
    isLoading?: boolean;
}

export function LoginButton({title, onButtonPress, isLoading, whatIcon, ...rest}: Props){

    const backgroundColor = whatIcon === 'Google' ? {backgroundColor: '#db4437'} : {backgroundColor: '#4285f4'};

    return(
        <TouchableOpacity style={[styles.container, backgroundColor]} {...rest}>
        { isLoading === true
            ?
            <ActivityIndicator color={'#fff'} size={20} />
            :
            <>
                {whatIcon === 'Google' && <AntDesign name="google" size={24} color="white" />}
                {whatIcon === 'Facebook' && <AntDesign name="facebook-square" size={24} color="white" />}
                <Text style={styles.text}>
                    {title}
                </Text>
            </>
        }
        </TouchableOpacity>
    )
}