import React from "react";
import {
    Flex,
    Heading,
    Image,
} from "@chakra-ui/react";


interface TitleProps {
    logo: string; // Assuming 'logo' is a URL to an image
    title: string;
}

const Title: React.FC<TitleProps> = ({ logo, title }) => {
    return (
        <Flex
            color="blue.900"
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            gap={3}
            w="100%"

        >
            <Image
                src={logo}
                borderRadius={"lg"}
                width={"10"}
            />
            <Heading
                size="md"
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                display={"flex"}
            >
                {title}
            </Heading>
        </Flex>
    );
}

export default Title;
