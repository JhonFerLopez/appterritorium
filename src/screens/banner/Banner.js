import React, {Component}  from "react";
import styles from './styles';
import { Text, NativeBaseProvider, Box, VStack, HStack, Center, ScrollView, AspectRatio, Image, Stack, Heading } from "native-base";

export default class Banner extends React.Component {
    render() {
        return <>
        <Box alignItems="center">
            <Box maxW="100%" maxH="100%" style={{ borderColor:'yellow', borderWidth: 2}}>
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
                    }} alt="image"/>
                </AspectRatio>
                <Stack style={ styles.containerBanner }>
                    <Stack>
                        <Heading style={ styles.textBar }>
                            Nuevo Cursoa Almost before we knew it, we had
                        </Heading>
                    </Stack>
                    <Text fontWeight="400">
                        TÉCNICAS DE ILUSTRACIÓN PARA LIBROS INFANTILES
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                            }} fontWeight="400">
                                Ver más
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    </>;
    }
}