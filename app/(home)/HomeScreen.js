import { React } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <View>
                <Text style={estilos.texto}>
                    Aqui va lo del puto del Usiel
                </Text>
            </View>

        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    texto:{
        textAlign: "center",
        fontSize: 100
    }
})

export default HomeScreen