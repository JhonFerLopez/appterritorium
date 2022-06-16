import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log("--> "+width);
const MARGIN = 10;
const ALTO_IMAGEN = 229;
const ANCHO_IMAGEN = 370;
const NEW_ANCHO_IMAGEN = width - (MARGIN * 2);
const PHOTO_HEIGHT = (ALTO_IMAGEN * NEW_ANCHO_IMAGEN) / ANCHO_IMAGEN;
console.log("-->>> "+PHOTO_HEIGHT);

const styles = StyleSheet.create({
    categoria: {

    },
    presentacion: {
        position: 'absolute',
        width: '100%',
        top: 20,
        padding: 20,
        backgroundColor: 'white', 
        borderColor:'red', 
        borderWidth: 2
    }
});

export default styles;
