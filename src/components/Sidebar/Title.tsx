import React from "react";
import {
    Flex,
    Heading,
    Image,
} from "@chakra-ui/react";


interface TitleProps {
    logo: string; // Assuming 'logo' is a URL to an image
    title: string;
    onClick?: () => void;
    navSize: string;
}

const Title: React.FC<TitleProps> = ({ logo, title, onClick, navSize }) => {
    return (
        <Flex
            color="blue.900"
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={navSize === "small" ? "center" : "flex-start"}
            paddingTop={navSize === "small" ? "22%" : ""}
            gap={3}
            w="100%"

        >
            <Image
                src={logo}
                borderRadius={"lg"}
                width={"10"}
                onClick={onClick}
            />
            <Heading
                size="md"
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                display={navSize === "small" ? "none" : "flex"}
            >
                {title}
            </Heading>
        </Flex>
    );
}

export default Title;
