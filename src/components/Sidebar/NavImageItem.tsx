import React from 'react'
import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Image,
} from '@chakra-ui/react'


interface NavImageItemProps {
    image: string; // Assuming 'image' is a URL to an image
    title: string;
    active: boolean;
    navSize: string;
    onClick?: () => void;
}

const NavImageItem: React.FC<NavImageItemProps> = ({ image, title, active, navSize, onClick }) => {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    bgColor={active ? "#AEC8CA" : ""}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize === "large" ? "100%" : ""}
                    onClick={onClick}
                >
                    <MenuButton w="100%">
                        <Flex
                            alignItems={"center"}
                        >
                            <Image
                                src={image}
                                borderRadius={"lg"}
                                width={8}
                                height={8}
                            />
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default NavImageItem;