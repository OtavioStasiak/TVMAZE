import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    status: string;
}

export function Status({status}: Props){
    const color = status === 'Running' && {color: '#00f56e'};
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Status:
            </Text>
            <Text style={[styles.value, color]}>
                {status}
            </Text>
        </View>
    )
}