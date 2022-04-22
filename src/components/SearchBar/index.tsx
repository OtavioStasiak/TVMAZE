import React from "react";
import { View, TouchableOpacity, TextInput, TextInputProps } from "react-native";

import  { FontAwesome }  from 'expo-vector-icons';

import { styles } from "./styles";

type Props = TextInputProps & {

}

export function SearchBar({...rest}: Props){
    return(
        <View style={styles.container}>
            <TextInput placeholder="Pesquise sua Série..." placeholderTextColor={"#fff"} style={styles.input} {...rest}/>

            <TouchableOpacity>
                <FontAwesome name="search" size={24} color="white" />            
            </TouchableOpacity>
        </View>
    )
}