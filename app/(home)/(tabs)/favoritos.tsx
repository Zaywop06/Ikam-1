import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

const TarjetaPyME = ({ titulo, subtitulo, precio }) => (
  <View style={styles.tarjeta}>
    <Image
      source={require("../../assets/img/logo1.png")}
      style={styles.imagenTarjeta}
    />
    <View style={styles.detalleTarjeta}>
      <Text style={styles.tituloTarjeta}>{titulo}</Text>
      <Text style={styles.subtituloTarjeta}>{subtitulo}</Text>
      <Text style={styles.subtitulo2Tarjeta}>{precio}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/img/logo1.png")}
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.contenedor}>
        <Text style={styles.textoFavoritos}>Favoritos</Text>
        <TarjetaPyME
          titulo="PyME 1"
          subtitulo="Descripción"
          precio="Ubicación"
        />
        <TarjetaPyME
          titulo="PyME 2"
          subtitulo="Descripción"
          precio="Ubicación"
        />
        <TarjetaPyME
          titulo="PyME 3"
          subtitulo="Descripción"
          precio="Ubicación"
        />
        <TarjetaPyME
          titulo="PyME 4"
          subtitulo="Descripción"
          precio="Ubicación"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#CC0000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 85,
    height: 85,
    resizeMode: "contain",
  },
  contenedor: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textoFavoritos: {
    marginVertical: 15,
    fontSize: 35,
    fontWeight: "bold",
  },
  tarjeta: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imagenTarjeta: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    resizeMode: "cover",
  },
  detalleTarjeta: {
    flex: 1,
    padding: 10,
  },
  tituloTarjeta: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtituloTarjeta: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  subtitulo2Tarjeta: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#CC0000",
  },
});
