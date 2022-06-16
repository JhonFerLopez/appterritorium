import React, {Component}  from "react";
import styles from './styles';
import { Text, NativeBaseProvider, Box, Link, VStack, HStack, ScrollView, AspectRatio, Image, Stack, Heading } from "native-base";
import Header from './header/AppBar';
import Banner from './screens/banner/Banner';

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          products: [],
          url: 'https://dummyjson.com/products/'
        }
    }

    componentDidMount(){
        this.getProducts();
    }
    
    getProducts = () => {
        fetch(this.state.url)
        .then( res => res.json() )
        .then( res => {
            this.setState({
                products: res.products
            })
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
        return (
            <NativeBaseProvider >
                <Header />
                <ScrollView maxW="100%" h="auto" _contentContainerStyle={{
                        px: "0px",
                        minW: "100%"
                    }}>
                    <Banner/>

                    <VStack space={6} mt="5" mb="5" alignItems="center" >
                        { this.state.products.map( (result, i) =>  
                            <Box alignItems="center" w="90%" rounded="20" key={i}>
                                <Box maxW="100%" rounded="20" overflow="hidden" 
                                    borderColor="rgba(230, 230, 230, 1)" borderWidth="1" >
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9} >
                                            <Image source={{ uri: result.thumbnail }} alt="image"/>
                                        </AspectRatio>
                                    </Box>
                                    <Stack p="3" pl="6" pr="5" space={2} >
                                        <Stack space={0.5} >
                                            <Text ml="-0.5" mt="0" style={ styles.itemCategory }>
                                                {result.category}
                                            </Text>
                                            <Heading size="md" ml="-0.5" style={ styles.itemTitulo }>
                                                {result.title}
                                            </Heading>  
                                        </Stack>
                                        <Text fontWeight="400" style={ styles.itemDescrip }>
                                            {result.description}
                                        </Text>
                                        <HStack alignItems="center" space={10} justifyContent="space-between" mt="3">
                                            <HStack alignItems="center">
                                                <Link isUnderlined='' href='#'>
                                                    <Text style={ styles.itemLink }>+ Add to cart</Text>
                                                </Link >
                                            </HStack>
                                            <HStack alignItems="center">
                                                <Text style={ styles.itemPrice }>${result.price}</Text>
                                            </HStack>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                        )}
                    
                    </VStack>
                </ScrollView>
            </NativeBaseProvider>
        );
    }
}