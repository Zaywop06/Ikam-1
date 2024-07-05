import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import colorsIkam from '../assets/estilos';

const WelcomeScreen = () => {
  const handleLogin = () => {
    // Implement login logic here    
  };

  const ruta = useRouter();

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.contenedorTitulo}>
        <Text style={[estilos.tituloGen, estilos.titulo]}>Bievenido a</Text>
        <Text style={[estilos.tituloGen, estilos.subtitulo]}>IKAM Multitiendas</Text>
        <Text style={[estilos.tituloGen, estilos.label]}>Todo lo que buscas, a tu alcance</Text>
      </View>
      <View style={estilos.contenedorImg}>
        <Image
          source={require('../assets/img/bienvenida.png')}
          style={estilos.imagen}
        />
      </View>
      <View style={estilos.contenedorTitulo}>
        <Text style={[estilos.tituloGen, estilos.labelBtn]}>"Tu exito es nuestro objetivo"</Text>
      </View>
      <View style={estilos.contenedorBtn}>
        <Pressable
          title="Login"
          style={estilos.btn}
          onPress={() => ruta.push('/LoginScreen')}
        >
          <Text style={estilos.btnText}>Comieza YA</Text>
        </Pressable>        
      </View>
    </SafeAreaView>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff'
  },
  contenedorTitulo: {
    padding: 30
  },
  tituloGen: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    ...colorsIkam.azulTex
  },
  subtitulo: {
    fontSize: 35,
    fontWeight: '900'

  },
  label: {
    fontSize: 25,
  },
  contenedorImg: {
    padding: 20

  },
  imagen: {    
    width: 400,
    height: 400,

  },
  contenedorBtn: {
    padding: 5
  },
  labelBtn:{
    fontSize: 25,
    fontStyle: 'native',
    ...colorsIkam.rojoTex    
  },
  btn: {    
    padding: 15,    
    marginBottom: 20,
    borderRadius: 40,

    ...colorsIkam.azul
  },
  btnText: {
    fontSize: 30,
    color: 'white',    
  }
});

export default WelcomeScreen;
