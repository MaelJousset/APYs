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
            justifyContent={{ base: "center", md: "flex-start" }}
            gap={{ base: 4, md: 3 }}
            w="100%"

        >
            <Image
                src={logo}
                borderRadius={"lg"}
                width={{ base: "8", md: "10" }}
                height={{ base: "8", md: "10" }}
                alt={"StarkViewer Logo"}
                loading="lazy"
            />
            <Heading
                size={{ base: "sm", md: "md" }}
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                display={"flex"}
                textAlign={"center"}
                verticalAlign={"center"}
            >
                {title}
            </Heading>
        </Flex>
    );
}

export default Title;
