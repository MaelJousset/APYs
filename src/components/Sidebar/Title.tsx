import React from "react";
import {
    ChakraProvider,
    Flex,
    Heading,
    Image,
    extendTheme,
} from "@chakra-ui/react";


interface TitleProps {
    logo: string; // Assuming 'logo' is a URL to an image
    title: string;
}

const Title: React.FC<TitleProps> = ({ logo, title }) => {
    return (
        <Flex
            bg="white"
            color="blue.900"
            alignItems="center"
            flexDirection={"row"}
            justifyContent="flex-start"
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
                fontFamily={"Plus Jakarta Sans, sans-serif"}
            >
                {title}
            </Heading>
        </Flex>
    );
}

export default Title;
