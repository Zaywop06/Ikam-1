import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuración de Firebase para la segunda base de datos
const firebaseConfig2 = {
  apiKey: "AIzaSyB-Sm38xUlEJRRS4cB0MKjSjCI_uzRhoE8",
  projectId: "ikamultitiendas",
  storageBucket: "ikamultitiendas.appspot.com",
  authDomain: "ikamultitiendas.firebaseapp.com",
  appId: "1:844394495235:android:34bf6cd669fe2b7d487d36"
};

// Inicializa la segunda instancia de Firebase si no está ya inicializada
const app2 = getApps().find(app => app.name === 'app2') || initializeApp(firebaseConfig2, 'app2');

const auth = initializeAuth(app2, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Obtén Firestore y Auth para la segunda instancia
const ikam = getFirestore(app2);
// const auth = getAuth(app2);

export { app2, ikam, auth };
