const obtenerPymes = async () => {
    const querySnapshot = await getDocs(collection(ikam, "pyme"));
    const pymesArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));    
};