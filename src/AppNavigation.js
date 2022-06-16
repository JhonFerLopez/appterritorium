
import React, {Component}  from "react";
import styles from './styles';
import { Text, NativeBaseProvider, Box, VStack, HStack, Center, ScrollView, AspectRatio, Image, Stack, Heading } from "native-base";
import Header from './header/AppBar';
import Banner from './screens/banner/Banner';
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default class AppContainer extends React.Component {
    render() {
        return (
            <NativeBaseProvider >
                <Header />
                <ScrollView maxW="100%" h="auto" _contentContainerStyle={{
                        px: "0px",
                        minW: "100%"
                    }} style={{ borderColor:'blue', borderWidth: 4}}>
                    <Banner/>
                    <VStack space={4} alignItems="center">
                        <Center w="100%" h="20" bg="indigo.300" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.700" rounded="md" shadow={3} />
                        <Center w="64" h="20" bg="indigo.500" rounded="md" shadow={3} />

                    </VStack>
                </ScrollView>
                
            </NativeBaseProvider>
        );
    }
}