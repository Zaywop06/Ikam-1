import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  BackHandler,
  Alert,
  Text,
} from "react-native";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import ListaCategorias from "../../components/categorias";
import ListaPymes from "../../components/pymes"; // Importa el componente ListaPymes
import VistaDetallesPymeMod from "../../components/DetallesPymeModal"; // Importa el componente ListaPymes
import { app } from "../../firebase/config-ikam";

const db = getFirestore(app);

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [pymes, setPymes] = useState([]);
  const [pymeSeleccionada, setPymeSeleccionada] = useState(null);
  const [vistaDetalles, setVistaDetalles] = useState(false);

  const obtenerCategorias = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categoria"));
      const categoriasArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategorias(categoriasArray);
    } catch (error) {
      console.error("Error obteniendo las categorías:", error);
    }
  }, []);

  const obtenerPymesPorCategoria = useCallback(async (nombreCategoria) => {
    try {
      const q = query(
        collection(db, "pyme"),
        where("nombreCategoria", "==", nombreCategoria)
      );
      const querySnapshot = await getDocs(q);
      const pymesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPymes(pymesArray);
    } catch (error) {
      console.error("Error obteniendo las pymes:", error);
    }
  }, []);

  const obtenerDetallesPyme = async (pymeId) => {
    const docRef = doc(db, "pyme", pymeId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (categoriaSeleccionada) {
          setCategoriaSeleccionada(null);
          return true; // Prevenir la acción por defecto
        } else {
          Alert.alert(
            "Salir",
            "¿Estás seguro que quieres salir?",
            [
              { text: "No", onPress: () => null, style: "cancel" },
              { text: "Sí", onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false }
          );

          return true; // Previene la acción por defecto
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      // Obtener categorías al entrar en la pantalla
      obtenerCategorias();

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [categoriaSeleccionada, obtenerCategorias])
  );

  useEffect(() => {
    if (categoriaSeleccionada) {
      const categoria = categorias.find(
        (cat) => cat.id === categoriaSeleccionada
      );
      if (categoria) {
        obtenerPymesPorCategoria(categoria.nombreCat);
      }
    }
  }, [categoriaSeleccionada, categorias, obtenerPymesPorCategoria]);

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.cabecera}>
        <Image
          source={require("../../assets/img/logo1.png")}
          style={estilos.logo}
        />
      </View>

      {categoriaSeleccionada ? (
        <View style={estilos.contenedorPymes}>
          {pymes.length > 0 ? (
            <ListaPymes
              setPymeSeleccionada={setPymeSeleccionada}
              pymesQ={pymes}
              setVistaDetalles={setVistaDetalles}
            />
          ) : (
            <View style={estilos.contenedorMensaje}>
              <Text style={estilos.mensajeNoPymes}>
                No hay pymes disponibles para esta categoría
              </Text>
            </View>
          )}
          <VistaDetallesPymeMod
            pymeId={pymeSeleccionada}
            volver={() => setVistaDetalles(false)}
            obtenerDetallesPyme={obtenerDetallesPyme}
            vistaDetalles={vistaDetalles}
            setVistaDetalles={setVistaDetalles}
          />
        </View>
      ) : (
        <View style={estilos.contenedorCategorias}>
          <ListaCategorias
            setCategoriaSeleccionada={setCategoriaSeleccionada}
            categorias={categorias}
            categoriaSeleccionada={categoriaSeleccionada}
          />
        </View>
      )}
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
  contenedorCategorias: {
    flex: 1,
    paddingHorizontal: 5,
  },
  contenedorPymes: {
    flex: 1,
    paddingHorizontal: 5,
  },
  contenedorMensaje: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mensajeNoPymes: {
    textAlign: "center",
    fontSize: 25,
    marginVertical: 20,
  },
});

export default App;
