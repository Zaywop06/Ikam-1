import React, { Component } from 'react'
import { TouchableOpacity, Image, View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default ListaPymes = ({ setPymeSeleccionada, pymesQ }) => {

    const manejarPymePresionada = (pymeId) => {
        setPymeSeleccionada(pymeId);
    };

    const renderizarItemPyme = ({ item }) => (
        <TouchableOpacity
            style={estilos.tarjeta}
            onPress={() => manejarPymePresionada(item.id)}
        >
            <Image source={{ uri: item.imagen1 }} style={estilos.imagenTarjeta} />
            <View style={estilos.detalleTarjeta}>
                <Text style={estilos.tituloTarjeta}>{item.nombre_pyme}</Text>
                <Text style={estilos.subtituloTarjeta}>{item.direccion}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <FlatList
            data={pymesQ}
            renderItem={renderizarItemPyme}
            keyExtractor={(item) => item.id}
            contentContainerStyle={estilos.listaPymes}
        />
    )
}

const estilos = StyleSheet.create({
    tarjeta: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        backgroundColor: "#fff",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: width * .90,
        marginBottom: 20,
        alignSelf: "center",
    },
    imagenTarjeta: {
        width: 500,
        height: 250,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        resizeMode: "stretch",
    },
    detalleTarjeta: {
        flex: 1,
        padding: 20,
    },
    tituloTarjeta: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtituloTarjeta: {
        fontSize: 14,
        color: "#888",
        marginBottom: 5,
    },
    listaPymes: {
        paddingBottom: 20,
    },
});