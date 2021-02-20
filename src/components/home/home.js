import React from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import jellyBeanRowImage from "./images/jellybeanrow2.png";

const Home = () => {
  return (
    <Box width="100%" height="90vh" textAlign="center" letterSpacing="wide">
      <Flex
        flexDirection="column"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="center"
        position="absolute"
      >
        <Image
          width="100%"
          height="90vh"
          src={jellyBeanRowImage}
          position="absolute"
          zIndex="-999999"
        />
        <Box
          backgroundColor="rgba(0, 0, 0, 0.6)"
          padding="1rem"
          minWidth="100%"
        >
          <Heading fontSize="5xl" color="gray.100" marginBottom="1rem">
            Welcome to Virtual Tours NL
          </Heading>
          <Text
            color="gray.100"
            fontWeight="bold"
            fontSize="lg"
            margin="0.5rem"
          >
            Tour the vibrant and charming province of Newfoundland without ever
            leaving your home.
          </Text>
          <Text
            color="gray.100"
            fontWeight="bold"
            fontSize="lg"
            margin="0.5rem"
          >
            Iconic historic sites, beautiful scenery, and much more awaits you.
          </Text>
          <Flex
            flexDirection="row"
            minWidth="100%"
            alignItems="center"
            justifyContent="center"
            marginTop="1.5rem"
            marginBottom="0.2rem"
          >
            <Button colorScheme="blue" marginRight="0.25rem" color="black">
              Learn More
            </Button>
            <Button colorScheme="teal" marginLeft="0.25rem" color="black">
              Book A Virtual Tour
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
