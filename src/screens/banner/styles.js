import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    containerBanner: {
        position: 'absolute',
        width: '100%',
        top: 30,
        padding: 20,
        backgroundColor: 'pink', 
        borderColor:'red', 
        borderWidth: 2
    },
    textBar: {
        color: '#FFFFFF',
        opacity: 1,
        fontFamily: 'OpenSans_400Regular', 
        fontSize: 23,
    }
});

export default styles;