import React, { useEffect, useState, useCallback } from "react";
import {
  ScrollView,
  RefreshControl,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TextInput,
  TextInputComponent,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const { width } = Dimensions.get("window");

import { FontAwesome5 } from "@expo/vector-icons";

// import Logo from '../../assets/img/tienda.jpg';

import { getFirestore, collection, getDocs } from "firebase/firestore";
// Base de mi compa el pelon
import { app } from "../../firebase/config";
// Base de esos jotos
import { ikam } from "../../firebase/config-ikam";
const db = getFirestore(app);

const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [pymes, setPymes] = useState([]);
  const [pymesQ, setPymesQ] = useState([]);
  const [busquedaPyme, setbusquedaPyme] = useState(String);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [pymeSeleccionada, setPymeSeleccionada] = useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Todas las colonias', value: '' },
    { label: 'Aragón 2da. Sección', value: 'Aragón 2da. Sección' },
    { label: 'Aragón 1ra. Sección', value: 'Aragón 1ra. Sección' },
  ]);

  // const obtenerCategorias = async () => {
  //   const querySnapshot = await getDocs(collection(db, "categorias"));
  //   const categoriasArray = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setCategorias(categoriasArray);
  // };

  const obtenerPymes = async () => {
    const querySnapshot = await getDocs(collection(ikam, "pyme"));
    const pymesArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPymes(pymesArray);
  };

  useEffect(() => {
    if (pymes) {
      setPymesQ(pymes);
    }

    if (busquedaPyme) {
      const pyme = pymesQ.filter(p =>
        p.nombre_pyme.toLowerCase().includes(busquedaPyme.toLowerCase())
      );
      setPymesQ(pyme);
    }
  }, [pymes, busquedaPyme])
  
  useEffect(() => {
    if (value) {      
      const pyme = pymes.filter(p =>
        p.coloniaPyme && typeof p.coloniaPyme === 'string' && p.coloniaPyme.includes(value)
      );
      setPymesQ(pyme);
    }

    if (!value) {            
      setPymesQ(pymes);
    }
  }, [value])


  useEffect(() => {
    // obtenerCategorias();
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

  const renderizarItemCategoria = ({ item }) => {
    if (item.categoriaPyme != null) {
      return (
        <TouchableOpacity
          style={
            [
              estilos.categoria,
              categoriaSeleccionada === item.id && estilos.categoriaSeleccionada,
            ]}
          onPress={() => manejarCategoriaPresionada(item.id)}
        >
          <FontAwesome5
            name="pizza-slice"
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
            {item.categoriaPyme}
          </Text>
        </TouchableOpacity >
      )
    }
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
          size={25}
          color="#222C57"
          style={estilos.iconoBusqueda}
        />
        <TextInput
          style={estilos.entradaBusqueda}
          placeholder="¿Qué lugar es de tu interés?"
          placeholderTextColor="#222C57"
          value={busquedaPyme}
          onChangeText={setbusquedaPyme}
        />
        {busquedaPyme &&
          <FontAwesome5
            name="times"
            size={25}
            color="#C61919"
            style={estilos.iconoBusqueda}
            onPress={() => {
              setbusquedaPyme("");
            }}
          />
        }
        <FontAwesome5
          name="filter"
          size={25}
          color="#222C57"
          style={estilos.iconoBusqueda}
          onPress={() => {            
            setModalVisible(true);
          }}
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={estilos.contenedorCategorias}>
          <View style={estilos.listaCategorias}>
            <FontAwesome5
              name="angle-left"
              size={25}
              color="#C61919"
              style={estilos.iconoCategoria}
              onPress={() => {                
              }}
            />
            <FlatList
              data={pymesQ}
              renderItem={renderizarItemCategoria}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            // contentContainerStyle={}
            />
            <FontAwesome5
              name="angle-right"
              size={25}
              color="#C61919"
              style={estilos.iconoCategoria}
              onPress={() => {
                console.log("HOla perro");
              }}
            />
          </View>
        </View>
        <View style={estilos.contenedorPymes}>
          <FlatList
            data={pymesQ}
            renderItem={renderizarItemPyme}
            keyExtractor={(item) => item.id}
            contentContainerStyle={estilos.listaPymes}
          />
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={estilos.modalBackground}>
            <View style={estilos.modalView}>
              <Text style={estilos.modalText}>Busca en la ciudad de tu agrado</Text>


              <View >
                <Text style={estilos.modalTextDrop}>Colonia</Text>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Selecciona una colonia"
                />                
              </View>

              <TouchableOpacity
                style={[estilos.button, estilos.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={estilos.textStyle}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    marginTop:35,
    backgroundColor: '#41DFD1',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25
  },
  modalTextDrop: {
    fontSize: 20
  },
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
    marginLeft: 10,
  },
  iconoCategoria: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  entradaBusqueda: {
    flex: 1,
    fontSize: 16,
    textAlign: "center"
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
