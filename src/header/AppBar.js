import React, {Component}  from "react";
import styles from './styles';
import {  HStack, IconButton, Icon, Image, Center, Box, StatusBar, AspectRatio } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default class AppBar extends React.Component {
    render() {
        return <>
        <StatusBar bg="#833197" barStyle="light-content" />
        <Box safeAreaTop bg="#833197" />
        <HStack bg="#833197" px="1" py="2" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
            <HStack>
                <IconButton icon={<Icon size="8" as={MaterialIcons} name="menu" color="white" />} />
            </HStack>
            <HStack alignItems="center" w="60%" >
                <Center w="100%" h="10" >
                    <Image w="100%" h="8" source={{ uri: "https://territorium.com/wp-content/uploads/2021/12/Territorium_Logo.Tagline-Full-WHITE.png" }} alt="image" resizeMode='contain'/>
                </Center>
            </HStack>
            <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="shopping-cart" size="8" color="white" />} />
            </HStack>
        </HStack>
    </>;
    }
}

