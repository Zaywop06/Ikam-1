import { Modal, Text, TouchableOpacity, View, StyleSheet, StatusBar } from 'react-native';
import {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';


const ModalFiltro = ({ modalVisible, setModalVisible, colonia, setColonia }) => {
    const [open, setOpen] = useState(false);    
    const [colonias, setcolonias] = useState([
        { label: 'Todas las colonias', value: '' },
        { label: 'Aragón 2da. Sección', value: 'Aragón 2da Sección' },
        { label: 'Aragón 1ra. Sección', value: 'Aragón 1ra Sección' },
    ]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
                StatusBar.setHidden(false);
            }}
        >
            <View style={estilos.modalBackground}>
                <View style={estilos.modalView}>
                    <Text style={estilos.modalText}>Busca en la ciudad de tu agrado</Text>
                    <View >
                        <Text style={estilos.modalTextDrop}>Colonia</Text>
                        <DropDownPicker
                            open={open}
                            setOpen={setOpen}
                            value={colonia}
                            setValue={setColonia}
                            items={colonias}
                            setItems={setcolonias}
                            placeholder="Selecciona una colonia"
                        />
                    </View>
                    <TouchableOpacity
                        style={[estilos.button, estilos.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={estilos.textStyle}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

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
        marginTop: 35,
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


});

export default ModalFiltro;