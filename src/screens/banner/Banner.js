import React, {Component}  from "react";
import styles from './styles';
import { Text, Link, Box, VStack, HStack, Center, ScrollView, AspectRatio, Image, Stack, Heading } from "native-base";

export default class Banner extends React.Component {
    render() {
        return <>
        <Box alignItems="center">
            <Box maxW="100%" maxH="100%">
                <AspectRatio w="100%" ratio={16 / 9}>
                    <Image source={{
                        uri: "https://www.albertoalbarran.com/wp-content/uploads/2017/05/2017-05-15-10-17-e1503670294671.jpg"
                    }} alt="image" style={ styles.imgBanner }/>
                </AspectRatio>
                <Stack style={ styles.containerBanner } space={2}>
                    <Stack>
                        <Heading style={ styles.textBar }>
                            Nuevo Curso
                        </Heading>
                    </Stack>
                    <Text style={ styles.textTitle }>
                        TÉCNICAS DE ILUSTRACIÓN PARA LIBROS INFANTILES
                    </Text>
                    <HStack alignItems="center" justifyContent="space-between">
                        <HStack alignItems="center">
                            <Link isUnderlined='' href='#'>
                                <Text style={ styles.textLink }>Ver más</Text>
                            </Link >
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    </>;
    }
}