import { useEffect, useState } from "react";
import {RestaurantCard} from "./restaurant-card";
import data from './json-data';
import { Box, Heading, Wrap, WrapItem, Text,Image } from "@chakra-ui/react";

function Restaurants() {
    return(
        <div>
            <Box width="90%" p="20"pb="10" minH="70vh" display="flex">
                <Box width="40%" display="flex" justifyContent="center" flexDirection="column">
                    <Heading>Dine At Your Favourite Restaurant, Safe</Heading>
                    <Text>Some random text</Text>
                </Box>
                <Box width="60%" display="flex">
                    <Image src='/images/dine-in.jpg' mr="10"
                    borderRadius="lg"
                    width="28%" height="80%"/>
                    <Image src='/images/dine-in2.jpg' mt="50"
                    mr="10" borderRadius="lg"
                    width="28%" height="80%"/>
                    <Image src='/images/dine-in3.jpg' 
                    mr="10" 
                     borderRadius="lg"
                    width="28%" height="80%"/>
                </Box>
            </Box>
            <Box width="100%" p="10">
            <Wrap spacing="30px">
            {data.map(el => ( 
                <WrapItem key={el.title}  >
                    <RestaurantCard  property={el} />
                </WrapItem> )      
            )}
            </Wrap>
            </Box>
        </div>
    )
}
export default Restaurants;