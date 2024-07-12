import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

import { FontAwesome5 } from "@expo/vector-icons";

// import Logo from '../../assets/img/tienda.jpg';

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase/config";
import { ikam } from "../../firebase/config-ikam";
const db = getFirestore(app);

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [pymes, setPymes] = useState([]);
  const [pymeSeleccionada, setPymeSeleccionada] = useState(null);

  const obtenerCategorias = async () => {
    const querySnapshot = await getDocs(collection(db, "categorias"));
    const categoriasArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCategorias(categoriasArray);
  };

  const obtenerPymes = async () => {
    const querySnapshot = await getDocs(collection(ikam, "pyme"));
    const pymesArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPymes(pymesArray);
  };

  useEffect(() => {
    obtenerCategorias();
    obtenerPymes();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await obtenerCategorias();
    await obtenerPymes();
    setRefreshing(false);
  }, []);

  const manejarCategoriaPresionada = (categoriaId) => {
    setCategoriaSeleccionada(categoriaId);
  };

  const manejarPymePresionada = (pymeId) => {
    setPymeSeleccionada(pymeId);
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
        <View style={estilos.contenedorPymes}>
          <FlatList
            data={pymes}
            renderItem={renderizarItemPyme}
            keyExtractor={(item) => item.id}
            contentContainerStyle={estilos.listaPymes}
          />
        </View>
      </ScrollView>
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
    width: width * 0.9,
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
  contenedorPymes: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  listaPymes: {
    paddingBottom: 20,
  },
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
});

export default App;
