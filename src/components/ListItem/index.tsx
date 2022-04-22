import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { FavoriteButton } from "../FavoriteButton";
import {Average} from '../Average';

import { styles } from "./styles";
import { Status } from "../Status";


type Props = {
    image: string;
    title: string;
    genre:[string];
    status: string;
    average: number;
}

export function ListItem({image,title,genre,status, average}: Props){

   const lastIndexOfGenreArray = genre.length - 1;

    return(
        <TouchableOpacity activeOpacity={0.8} style={styles.container}>

            <Image source={{uri: image }}  resizeMode="contain" style={styles.image}/>

            <View style={styles.textContent}>
                <Text style={styles.title}>
                {title}
                </Text>
                
                <Average rating={average} />

                <Status status={status}/>
                <Text style={styles.genre}>
                    {genre.map((item, index) => index  === lastIndexOfGenreArray ? item : item+' | ')}
                </Text>
            </View>
            <FavoriteButton />

        </TouchableOpacity>
    )
}
