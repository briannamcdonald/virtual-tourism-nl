import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Icon,
  Image,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

// TODO - make this a link

const Tour = (props) => {
  return (
    <Box
      width="100%"
      height="30rem"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      letterSpacing="wide"
      margin="0.5rem"
      position="relative"
    >
      <IconButton
        icon={<FiHeart />}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        position="absolute"
        right="0"
        fontSize="1.5rem"
        margin="0.5rem"
        color={props.heartColor}
      />
      <Box
        position="absolute"
        backgroundColor="rgba(0, 0, 0, 0.65)"
        borderRadius="1000px"
        margin="0.5rem"
        padding="0.3rem"
      >
        <Text color="white" fontSize="0.8rem">
          {props.type}
        </Text>
      </Box>
      <Image src={props.image} height="18rem" width="100%" />
      <Box href={props.link} padding="1rem" marginX="0.5rem">
        <Flex alignItems="center" marginTop="0.8rem" marginBottom="0">
          <Heading as="h4" size="md" marginRight="0.4rem">
            {props.title}
          </Heading>
          <Text marginRight="0.4rem">•</Text>
          <Icon as={FaStar} color="yellow.400" fontSize="lg" />
          <Text>{props.stars}</Text>
        </Flex>
        <Text marginY="1rem" marginTop="0">
          {props.description}
        </Text>
        <Flex flexDirection="row" marginY="1rem">
          <Icon as={MdLocationOn} fontSize="xl" color="red.400" />
          <Text>{props.location}</Text>
        </Flex>
        <Text>
          From <b>${props.price}/person</b>
        </Text>
      </Box>
    </Box>
  );
};

export default Tour;
