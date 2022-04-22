import {View, Text, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import LogoImg from '../../assets/logo.png';
import { styles } from './styles';
import { LoginButton } from '../../components/LoginButton';
import React, { useState } from 'react';


export function Login(){
    const [FLoading, setFLoading] = useState(false);
    const [GLoading, setGLoading] = useState(false);

    function handleLoginWithGoogle(){
        if(GLoading || FLoading === true){
            return;
        };
        setGLoading(true);
    };

    function handleLoginWithFacebook(){
        if(FLoading || GLoading === true){
            return;
        };
        setFLoading(true);
    };

    return(
        <View style={styles.container}>

            <StatusBar style='dark'/>

            <View style={styles.content}>
                <Image source={LogoImg} resizeMode="contain" style={styles.logo} />

                <Text style={styles.text}>
                    Encontre suas séries favoritas,{'\n'}
                    verifique sua programação e{'\n'}
                    muito mais!
                </Text>

                <LoginButton onPress={handleLoginWithGoogle} activeOpacity={0.8} isLoading={GLoading} whatIcon='Google' title='Logar Com Google' />
                <LoginButton onPress={handleLoginWithFacebook} activeOpacity={0.8} isLoading={FLoading} whatIcon='Facebook' title='Logar Com Facebook' />
            </View>

        </View>
    )
}