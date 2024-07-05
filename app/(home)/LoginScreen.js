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
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>
              Inicia sesion <Text style={{ color: '#075eec' }}></Text>
            </Text>

            <Text style={styles.subtitle}>
              o registrate con otra cuenta en IKAM
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="number-pad"
                onChangeText={phone => setForm({ ...form, phone })}
                placeholder="Numero de celular"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.phone} />
            </View>


            <View style={styles.input}>


              {/* <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} /> */}
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Ingresar</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.formLink}>¿Has olvidado tu contraseña?</Text>


            <Text style={styles.subtitle2}>
              O también
            </Text>

            <View style={styles.signInButtons}>
              <TouchableOpacity
                onPress={() => { }}
                style={[styles.signInBtn]}
              >

                <Text style={[styles.signInBtnText]}>
                  Continuar con Correo electronico
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signInButtons}>
              <TouchableOpacity
                onPress={() => { }}
                style={[styles.signInBtn]}
              >
                <Text style={[styles.signInBtnText]}>
                  Continuar con Google
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signInButtons}>
              <TouchableOpacity
                onPress={() => { }}
                style={[styles.signInBtn]}
              >
                <Text style={[styles.signInBtnText]}>
                  Continuar con Facebook
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.signInButtons}>
              <TouchableOpacity
                onPress={() => { }}
                style={[styles.signInBtn]}
              >
                <Text style={[styles.signInBtnText]}>
                  Continuar con Apple
                </Text>
              </TouchableOpacity>
            </View>

          </View>


        </ScrollView>

        {/* <TouchableOpacity
          onPress={() => {
            // handle link
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            ¿No tienes una cuenta?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Registrate</Text>
          </Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 20,
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
    textAlign: 'center',
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
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 2,
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
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#C61919',
    borderColor: '#222C57',
  },
  btnText: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
    color: '#fff',
  },
  signInButtons: {
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  signInBtn: {
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInBtnText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#222C57',
  },
});

export default LoginScreen;
