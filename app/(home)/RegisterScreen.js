import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Logo from '../assets/img/logo_ikam.png'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <ScrollView>

          < Image source={Logo}
            style={styles.logo} />
          <View style={styles.header}>
            <Text style={styles.title}>
              Registrate
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="Correo electronico"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email} />
            </View>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="visible-password"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="Contraseña"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.password} />
            </View>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="visible-password"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="Confirmar contraseña"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.password} />
            </View>
            <Text style={styles.formLink}>Registrarse con numero telefonico</Text>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.btnContain}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Registrar</Text>
                  </View>
                </View>

              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle2}>
              O también
            </Text>
            <View style={styles.input}>
            </View>

            <View style={styles.signInButtons}>
              {/* <TouchableOpacity
                onPress={() => { }}
                style={styles.signInBtn}
              >
                <Entypo name='email' color='#81f7d8' size={30} />                
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => { }}
                style={styles.signInBtn}
              >
                <Entypo name='facebook-with-circle' color='#5882FA' size={40} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={styles.signInBtn}
              >
                <AntDesign name='google' color='#F78181' size={40} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { }}
                style={styles.signInBtn}
              >
                <Entypo name='circle' size={40} />

              </TouchableOpacity>
            </View>
            <View style={styles.input}>
            </View>
            <Text style={styles.label}>
              ¿Ya tienes una cuenta? <Link href={'LoginScreen'} style={styles.labelLink}>Inicia en IKAM</Link>
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  label: {
    textAlign: 'center',
  },
  labelLink: {
    textAlign: 'center',
    color: 'blue'
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222C57',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '500',
    color: '#929292',
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: 'black',
    color: '#1D2A32',
    alignSelf: 'center',
    marginBottom: 10,
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  logo: {
    alignSelf: 'center',
    width: 300,
    height: 150,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 10,
    marginBottom: 16,

  },
  formLink: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222C57',
    textAlign: 'right',
    marginBottom: 30,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#222',
    marginBottom: 1,
  },
  inputControl: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#222C57',
    borderStyle: 'solid',
  },
  inputControl2: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 2,
    borderColor: '#222C57',//'#41DFD1','#C61919',
    borderStyle: 'solid',
    marginBottom: 7,
    marginTop: 10,
  },

  /** Button */
  btnContain: {
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#C61919',
    borderColor: '#222C57',
    width: "40%",
  },
  btnText: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
    color: '#fff',
  },
  signInButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 0,
    width: "100%",
  },
  signInBtn: {
    flexDirection: "row",
    width: "40%",
    borderWidth: 0,
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signInBtnText: {
    marginLeft: 10,
    fontSize: 13,
  },
});

export default LoginScreen;
