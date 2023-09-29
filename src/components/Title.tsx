import React from "react";
import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Image,
    VStack,
    Link,
    extendTheme,
    CSSReset,
} from "@chakra-ui/react";

// Chakra UI theme customization (optional)
const customTheme = extendTheme({
    fonts: {
        heading: "Plus Jakarta Sans, Poppins, sans-serif",
        body: "Plus Jakarta Sans, Poppins, sans-serif",
    },
});

interface TitleProps {
    logo: string; // Assuming 'logo' is a URL to an image
    title: string;
}

const Title: React.FC<TitleProps> = ({ logo, title }) => {
    return (
        <ChakraProvider theme={customTheme}>
            <Flex
                bg="white"
                color="navy.700"
                p={4}
                alignItems="center"
                flexDirection={"row"}
                justifyContent="left"
                gap={3}
                position={"fixed"}
            >
                <Image
                    src={logo}
                    borderRadius={"lg"}
                    width={"10"}
                />
                <Heading
                    size="md"
                >
                    {title}
                </Heading>
            </Flex>
        </ChakraProvider>
    );
}

export default Title;
