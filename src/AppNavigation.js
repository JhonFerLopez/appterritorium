
import React, {Component}  from "react";
import styles from './styles';
import { Text, NativeBaseProvider, Box, VStack, Center } from "native-base";
import Header from './header/AppBar';

export default class AppContainer extends React.Component {
    render() {
        return (
            <NativeBaseProvider>
                <Header />
                <Box>
                    
                </Box>
                <VStack space={4} alignItems="center">
                    <Center w="100%" h="20" bg="indigo.300" rounded="md" shadow={3} />
                    <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
                    <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                </VStack>
            </NativeBaseProvider>
        );
    }
}