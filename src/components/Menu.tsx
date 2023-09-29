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
    Tab,
} from "@chakra-ui/react";

import { IoIosHome } from 'react-icons/io'
import { FaWallet } from 'react-icons/fa'


import Title from "./Title";
import CustomTab, { CustomIconTab } from "./CustomTab";

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
                alignItems="center"
                flexDirection={"column"}
                justifyContent="space-evenly"
                height="100%"
                width="18%"
                gap={3}
                position={"fixed"}
            >
                <Title logo="/assets/APY_logo.png" title="APY DASHBOARD" />

                <Divider
                    bg="gray.800"
                    orientation='horizontal'
                    w="80%"
                />

                <Flex
                    alignItems="center"
                    flexDirection={"column"}
                    justifyContent="space-around"
                    height="max-content"
                    gap={2}
                >
                    <CustomIconTab icon={IoIosHome} name="Dashboard"></CustomIconTab>
                    <CustomTab logo="/assets/myswap.png" name="MySwap"></CustomTab>
                    <CustomTab logo="/assets/jediswap.jpg" name="JediSwap"></CustomTab>
                    <CustomTab logo="/assets/ekubo.png" name="Ekubo"></CustomTab>
                </Flex>

                <CustomIconTab icon={FaWallet} name="My Wallet"></CustomIconTab>

            </Flex>
        </ChakraProvider>
    );
}

export default Menu;
