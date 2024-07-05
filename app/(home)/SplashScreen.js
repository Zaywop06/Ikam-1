import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import colorsIkam from '../assets/estilos'
import Logo from '../assets/img/logo.png'

const SplashScreen = () => {
    const router = useRouter();

    useEffect(() => {        
        setTimeout(() => {
            if (1 == 1) {
                router.replace('/WelcomeScreen');    
            }else{
                router.replace('/HomeScreen');    
            }            
        }, 3000); // 3 seconds
    }, []);

    return (
        <View style={styles.container}>
            <Image
            source={Logo}
            style={styles.imagenLogo}
            />            
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ... colorsIkam.azul
    },
    imagenLogo: {        
        width:300,
        height: 300
    },
});

export default SplashScreen;
