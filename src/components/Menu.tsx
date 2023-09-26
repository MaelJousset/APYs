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
                justifyContent="left"
                gap={20}
            >
                <Heading ml={5} size="lg">APYs</Heading>
                <Box>
                    <Link mr={10} _hover={{ textDecoration: "none" }}>
                        MySwap
                    </Link>
                    <Link mr={10} _hover={{ textDecoration: "none" }}>
                        JediSwap
                    </Link>
                    <Link mr={10} _hover={{ textDecoration: "none" }}>
                        Ekubo
                    </Link>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default Menu;
