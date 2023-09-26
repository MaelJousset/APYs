import React from "react";
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    VStack,
    Link,
    extendTheme,
    CSSReset,
} from "@chakra-ui/react";

// Chakra UI theme customization (optional)
const customTheme = extendTheme({
    fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
    },
});

function Menu() {
    return (
        <ChakraProvider theme={customTheme}>
            <Flex
                bg="blue.500"
                color="white"
                p={4}
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading size="lg">My Website</Heading>
                <Box>
                    <Link mr={4} _hover={{ textDecoration: "none" }}>
                        Home
                    </Link>
                    <Link mr={4} _hover={{ textDecoration: "none" }}>
                        About
                    </Link>
                    <Link mr={4} _hover={{ textDecoration: "none" }}>
                        Services
                    </Link>
                    <Link _hover={{ textDecoration: "none" }}>Contact</Link>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default Menu;
