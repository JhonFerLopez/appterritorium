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
    itemCategory: {
        color: 'rgba(80, 126, 216, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 14,
        fontWeight: '400',
        textTransform: 'uppercase'
    },
    itemTitulo: {
        color: 'rgba(55, 62, 74, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 22,
        fontWeight: '500',
    },
    itemDescrip: {
        color: 'rgba(115, 124, 139, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
    },
    itemLink: {
        color: 'rgba(80, 126, 216, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 26,
    },
    itemPrice: {
        color: 'rgba(55, 62, 74, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 26,
        letterSpacing: 1.5
    },
});

export default styles;
