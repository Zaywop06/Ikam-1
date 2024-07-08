import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const categorias = [
  { id: "1", nombre: "Hoteles", icono: "hotel" },
  { id: "2", nombre: "Experiencias", icono: "hiking" },
  { id: "3", nombre: "Restaurantes", icono: "utensils" },
  { id: "4", nombre: "Aventuras", icono: "mountain" },
  { id: "5", nombre: "Eventos", icono: "calendar-alt" },
];

const anuncios = [
  {
    id: "1",
    titulo: "PyME 1",
    imagen: require("../../assets/img/logo1.png"),
    descripcion: "Descripción PyME 1.",
  },
  {
    id: "2",
    titulo: "PyME 2",
    imagen: require("../../assets/img/logo1.png"),
    descripcion: "Descripción PyME 2.",
  },
  {
    id: "3",
    titulo: "PyME 3",
    imagen: require("../../assets/img/logo1.png"),
    descripcion: "Descripción PyME 3.",
  },
  {
    id: "4",
    titulo: "PyME 4",
    imagen: require("../../assets/img/logo1.png"),
    descripcion: "Descripción PyME 4.",
  },
  {
    id: "5",
    titulo: "PyME 5",
    imagen: require("../../assets/img/logo1.png"),
    descripcion: "Descripción PyME 5.",
  },
];

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const manejarCategoriaPresionada = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
  };

  const renderizarItemCategoria = ({ item }) => (
    <TouchableOpacity
      style={[
        estilos.categoria,
        categoriaSeleccionada === item.id && estilos.categoriaSeleccionada,
      ]}
      onPress={() => manejarCategoriaPresionada(item.id)}
    >
      <FontAwesome5
        name={item.icono}
        size={24}
        color={categoriaSeleccionada === item.id ? "#000" : "#888"}
      />
      <Text
        style={[
          estilos.textoCategoria,
          categoriaSeleccionada === item.id &&
            estilos.textoCategoriaSeleccionada,
        ]}
      >
        {item.nombre}
      </Text>
    </TouchableOpacity>
  );

  const renderizarItemAnuncio = ({ item }) => (
    <TouchableOpacity style={estilos.tarjeta}>
      <Image source={item.imagen} style={estilos.imagenTarjeta} />
      <View style={estilos.detalleTarjeta}>
        <Text style={estilos.tituloTarjeta}>{item.titulo}</Text>
        <Text style={estilos.subtituloTarjeta}>{item.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecera}>
        <Image
          source={require("../../assets/img/logo1.png")}
          style={estilos.logo}
        />
      </View>
      <View style={estilos.barraBusqueda}>
        <FontAwesome5
          name="search"
          size={18}
          color="#888"
          style={estilos.iconoBusqueda}
        />
        <TextInput
          style={estilos.entradaBusqueda}
          placeholder="¿Qué lugar es de tu interés?"
          placeholderTextColor="#888"
        />
      </View>
      <View style={estilos.contenedorCategorias}>
        <FlatList
          data={categorias}
          renderItem={renderizarItemCategoria}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilos.listaCategorias}
        />
      </View>
      <View style={estilos.contenedorAnuncios}>
        <FlatList
          data={anuncios}
          renderItem={renderizarItemAnuncio}
          keyExtractor={(item) => item.id}
          contentContainerStyle={estilos.listaAnuncios}
        />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  cabecera: {
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
  barraBusqueda: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    width: "90%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    alignSelf: "center",
  },
  iconoBusqueda: {
    marginRight: 10,
  },
  entradaBusqueda: {
    flex: 1,
    fontSize: 16,
  },
  contenedorCategorias: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listaCategorias: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  categoria: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    width: 70,
    height: 70,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  textoCategoria: {
    marginTop: 8,
    color: "#888",
    fontSize: 8,
  },
  categoriaSeleccionada: {
    backgroundColor: "#EEE",
  },
  textoCategoriaSeleccionada: {
    color: "#000",
  },
  contenedorAnuncios: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  listaAnuncios: {
    paddingBottom: 20,
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
});

export default App;
