import React from 'react';
import { View, Text, SafeAreaView, Pressable, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import colorsIkam from '../assets/estilos';
import { useFonts } from 'expo-font';

const WelcomeScreen = () => {
  const handleLogin = () => {
    // Implement login logic here    
  };

  const fontsLoading = useFonts({
    Space:require('../assets/fonts/SpaceMono-Regular.ttf'),
    SansItalic:require('../assets/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf'),
    SansVar:require('../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf'),
  });

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
    fontFamily: 'SansVar',    
    textAlign: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    ...colorsIkam.azulTex
  },
  subtitulo: {
    fontSize: 30,
    fontWeight: '900'

  },
  label: {
    fontSize: 15,
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
    fontSize: 20,
    fontStyle: 'native',
    ...colorsIkam.rojoTex    
  },
  btn: {    
    padding: 15,    
    marginBottom: 20,
    borderRadius: 40,

    ...colorsIkam.cian
  },
  btnText: {
    fontSize: 20,
    color: 'white',    
  }
});

export default WelcomeScreen;
