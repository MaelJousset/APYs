import React from "react";
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    VStack,
    Link,
    extendTheme,
    Divider,
    CSSReset,
} from "@chakra-ui/react";

import Title from "./Title";

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
                bg="white"
                color="navy.700"
                p={4}
                alignItems="center"
                flexDirection={"column"}
                justifyContent="left"
                height="100%"
                width="18%"
                gap={20}
                position={"fixed"}
            >

                <Title logo="APY_logo.png" title="APY DASHBOARD" />

                <Divider
                    bg="gray.800"
                    orientation='horizontal'
                    w="80%"
                />

                <Flex
                    alignItems="center"
                    flexDirection={"column"}
                    justifyContent="center"
                    gap="10px"
                >
                    <Link _hover={{ textDecoration: "none" }}>
                        MySwap
                    </Link>
                    <Link _hover={{ textDecoration: "none" }}>
                        JediSwap
                    </Link>
                    <Link _hover={{ textDecoration: "none" }}>
                        Ekubo
                    </Link>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}

export default Menu;
