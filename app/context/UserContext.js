// src/contexts/UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ikam } from '../firebase/config-ikam';
import { getUserData } from '../auth/authService';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData(); // Obtener datos del usuario desde AsyncStorage y Firestore
        if (data && data.uid) {
          const userDocRef = doc(ikam, 'users', data.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data()); // Guardar datos del usuario en el estado
          } else {
            console.log('No such document!');
            setUserData(null); // Manejar el caso en que no se encuentra el documento
          }
        } else {
          console.log('No user data found or UID is missing');
          setUserData(null); // Manejar el caso en que no hay datos de usuario
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Siempre debe establecerse a false cuando se complete la carga
      }
    };

    fetchUserData();
  }, []); // La lista de dependencias está vacía, el efecto se ejecutará solo una vez al montar el componente

  return (
    <UserContext.Provider value={{ userData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
