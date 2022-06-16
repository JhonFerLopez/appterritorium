import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    imgBanner: {
    },
    containerBanner: {
        position: 'absolute',
        width: '100%',
        height:'100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
        backgroundColor: 'rgba(0,0,0,0.3)', 
    },
    textBar: {
        color: 'rgba(255, 255, 255, 1)',
        opacity: 2,
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 18,
        fontWeight: '400'
    },
    textTitle: {
        color: 'rgba(255, 255, 255, 1)',
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 26,
    },
    textLink: {
        color: 'rgba(255, 255, 255, 1)',
        opacity: 2,
        //fontFamily: 'OpenSans_400Regular', 
        fontSize: 16,
        fontWeight: '400',
    }
});

export default styles;