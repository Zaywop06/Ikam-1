import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faShieldAlt,
  faBell,
  faLock,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "expo-router";

export default function App() {
  useEffect(() => {
    library.add(faUserCircle, faShieldAlt, faBell, faLock, faSignOutAlt);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/img/logo1.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.contenedorPerfil}>
        <View style={styles.contenedorPerfilColumnas}>
          <Icon name="user-circle" size={70} color="#FFF" solid />
          <View style={styles.textoPerfilContainer}>
            <Text style={styles.textoPerfil}>Nombre de Usuario</Text>
            <Text style={styles.textoCorreo}>Correo Electrónico</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.contenedorOpciones}>
        <RenderOption icon="user-circle" text="Información Personal" />
        <RenderOption icon="shield-alt" text="Seguridad" />
        <RenderOption icon="bell" text="Notificaciones" />
        <RenderOption icon="lock" text="Privacidad" />
        <Link href={'/'}><RenderOption icon="sign-out-alt" text="Cerrar Sesión" /></Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const RenderOption = ({ icon, text }) => (
  <TouchableOpacity style={styles.elementoOpcion}>
    <Icon name={icon} size={24} color="#888" solid />
    <Text style={styles.textoOpcion}>{text}</Text>
    <Text style={styles.flecha}>›</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
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
  contenedorPerfil: {
    backgroundColor: "#222C57",
    paddingVertical: 20,
    paddingLeft: 25,
  },
  contenedorPerfilColumnas: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoPerfilContainer: {
    marginLeft: 20,
  },
  textoPerfil: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  textoCorreo: {
    fontSize: 17,
    color: "#FFF",
  },
  contenedorOpciones: {
    paddingHorizontal: 20,
  },
  elementoOpcion: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  textoOpcion: {
    marginLeft: 15,
    fontSize: 20,
  },
  flecha: {
    fontSize: 35,
    color: "#888",
    marginLeft: "auto",
  },
});
