import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { AntDesign } from "expo-vector-icons";

export function FavoriteButton(){
    const [favorited, setFavorited] = useState(false);

    function handleSetFavoriteShow(){
        setFavorited(!favorited);
    };

    return(
        <TouchableOpacity onPress={handleSetFavoriteShow}>
            {
                favorited === true
                ?
                <AntDesign name="heart" size={30} color="#c70805" />
                :
                <AntDesign name="hearto" size={30} color="#c4c4c4" />
            }
        </TouchableOpacity>
    )
}