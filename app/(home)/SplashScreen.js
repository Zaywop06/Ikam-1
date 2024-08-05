import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { getUserData, clearUserData } from '../auth/authService';
import { doc, getDoc } from 'firebase/firestore';
import { ikam } from '../firebase/config-ikam';

import colorsIkam from '../assets/estilos'
import Logo from '../assets/img/logo.png'

const SplashScreen = () => {
    const router = useRouter();    

    useEffect(() => {
        const checkAuthStatus = async () => {
            const userData = await getUserData();
            if (userData) {
                try {
                    const userDocRef = doc(ikam, 'users', userData.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        router.replace('(tabs)');
                    } else {
                        await clearUserData();
                        router.replace('/WelcomeScreen');
                    }
                } catch (error) {
                    console.error('Error verifying user data:', error);
                    await clearUserData();
                    router.replace('/WelcomeScreen');
                }
            } else {
                router.replace('/WelcomeScreen');
            }
        };
        setTimeout(checkAuthStatus, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.imagenLogo}
            />          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...colorsIkam.azul
    },
    imagenLogo: {
        width: 300,
        height: 300
    },
});

export default SplashScreen;
