import React, {Component}  from "react";
import styles from './styles';
import {  HStack, IconButton, Icon, Text, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default class AppBar extends React.Component {
    render() {
        return <>
        <StatusBar bg="#833197" barStyle="light-content" />
        <Box safeAreaTop bg="#833197" />
        <HStack bg="#833197" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
            <HStack alignItems="center">
                <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                <Center style={styles.logo}>
                    <Text color="white" fontSize="20" fontWeight="bold">
                        territorium
                    </Text>
                </Center>
            </HStack>
            <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="shopping-cart" size="md" color="white" />} />
            </HStack>
        </HStack>
    </>;
    }
}

