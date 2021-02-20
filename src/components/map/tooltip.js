import { SlideFade, Box, useDisclosure, Image, Text, Button } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import {BsGeoAlt} from 'react-icons/bs';

function MapTooltip({lat,lng,text,imageUrl,isOpen, onToggle, right, top}) {
    
    return(
        <Box lat={lat} lng={lng} position="absolute">
            <BsGeoAlt color={isOpen?'#16acea':"#d71b3b"} 
            size="20px" onClick={onToggle} cursor="pointer" />
            <Box visibility={isOpen?'visible':'hidden'} zIndex="10"
            position="relative" 
            top={top} 
            right={right}>
            <Box  
                color="black"
                width="230px"
                height="200px"
                mt="4"
                bg="white"
                rounded="md"
                shadow="md"
            >
            <Image src={imageUrl} 
            alt={text} width="230px" height="100px" roundedTop="md"  />
            <Box p="10px" fontSize="sm">
            {text}
            </Box>
        </Box>
            </Box>
        </Box>
    )
    // return(
    //     <div lat={lat} lng={lng}>
    //     <PopoverTrigger>
    //         <BsGeoAlt size="20px"/>
    //     </PopoverTrigger>
    //     <PopoverContent width="250px" height="250px">
    //     <Image src={imageUrl} 
    //         alt={text} width="250px" height="100px" roundedTop="md"  />
    //         <Box p="10px" fontSize="sm">
    //         {text}
    //         </Box>
    //         <Box p="10px">
    //             <Button color="#16acea" >Learn More</Button>
    //         </Box>
    //     </PopoverContent>
    //     </div>
    // )
}

export default MapTooltip;
const colors = ['#d71b3b','#e8d71e','#16acea','#4203c9']

