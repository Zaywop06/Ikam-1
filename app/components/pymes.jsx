import React, { Component } from 'react'
import { TouchableOpacity, Image, View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
const { width: viewportWidth } = Dimensions.get("window");

export default ListaPymes = ({ setPymeSeleccionada, pymesQ, setVistaDetalles }) => {

    const manejarPymePresionada = (pymeId) => {
        setPymeSeleccionada(pymeId);
        setVistaDetalles(true);
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
    listaPymes: {
        paddingBottom: 20,
    },
    tarjeta: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 33,
        backgroundColor: "#fff",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: viewportWidth * 0.9,
        marginBottom: 20,
        alignSelf: "center",
    },
    imagenTarjeta: {
        width: viewportWidth * 0.9,
        height: 250,
        borderTopLeftRadius: 10,
        resizeMode: "stretch",
    },
    detalleTarjeta: {
        flex: 1,
        padding: 20,
    },
    tituloTarjeta: {
        textAlign: "center",
        fontSize: 21,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtituloTarjeta: {
        textAlign: "center",
        fontSize: 14,
        color: "#888",
        marginBottom: 5,
    },
});