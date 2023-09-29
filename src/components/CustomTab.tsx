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
    Icon,
    Center,
} from "@chakra-ui/react";
import { IconType } from 'react-icons';

// Chakra UI theme customization (optional)
const customTheme = extendTheme({
    fonts: {
        heading: "Plus Jakarta Sans, Poppins, sans-serif",
        body: "Plus Jakarta Sans, Poppins, sans-serif",
    },
});

interface CustomTabProps {
    logo: string; // Assuming 'logo' is a URL to an image
    name: string;
}

interface CustomIconTabProps {
    icon: IconType; // Assuming 'logo' is a URL to an image
    name: string;
}

const CustomTab: React.FC<CustomTabProps> = ({ logo, name }) => {
    return (
        <ChakraProvider theme={customTheme}>
            <Flex
                bg="white"
                color="navy.700"
                alignItems="center"
                flexDirection={"row"}
                justifyContent="left"
                gap={2}
                position={"fixed"}
            >
                <Image
                    src={logo}
                    borderRadius={"lg"}
                    width={8}
                    height={8}
                />
                <Heading
                    size="sm"
                >
                    {name}
                </Heading>
            </Flex>
        </ChakraProvider>
    );
}

const CustomIconTab: React.FC<CustomIconTabProps> = ({ icon, name }) => {
    return (
        <ChakraProvider theme={customTheme}>
            <Flex
                bg="white"
                color="navy.700"
                alignItems="center"
                flexDirection={"row"}
                justifyContent="left"
                gap={2}
                position={"fixed"}
            >
                <Box
                    display="flex"
                    alignItems="center"  // Center vertically
                    justifyContent="center" // Center horizontally
                    bg={"teal.200"}
                    borderRadius={"xl"}
                    width={8}
                    height={8}
                >
                    <Icon
                        as={icon}
                        color="white"
                        w={4} h={4}
                    />
                </Box>
                <Heading
                    size="sm"
                >
                    {name}
                </Heading>
            </Flex>
        </ChakraProvider>
    );
}

export default CustomTab;
export { CustomIconTab };
