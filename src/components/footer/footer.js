import { Box, Flex, Text,Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebook,FaPinterest, FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
        <Box margin="20px" marginTop="0px">
            <hr/>
            <Flex justifyContent="space-evenly" height="150px" marginTop="20px" >
                <Flex p="10px" flexDirection="column">
                    <Text fontWeight="bold" >Policies</Text>
                    <Link>Terms of Service</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Cancellation Policy</Link>
                </Flex>
                <Flex p="10px" flexDirection="column">
                    <Text fontWeight="bold" >FAQs</Text>
                    <Link>Users</Link>
                    <Link>Providers</Link>
                </Flex>
                <Flex p="10px" flexDirection="column">
                    <Text fontWeight="bold">Contact and Support</Text>
                    <Link>Contact Us</Link>
                    <Link>Media Enquiries</Link>
                </Flex>
            </Flex>
            <hr/>
            <Flex margin="10px" justifyContent="space-between">
                <Text fontSize="0.8rem">&copy; 2021 NL Life. All Rights Reserved.</Text>
                <Flex minW="150px" justifyContent="space-between">
                    <FaFacebook />
                    <FaInstagram/>
                    <FaPinterest/>
                    <FaTwitter/>
                </Flex>
            </Flex>
        </Box>
    )
}
export default Footer;