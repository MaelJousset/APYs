import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Box,
    Image,
} from '@chakra-ui/react'


interface NavImageItemProps {
    image: string; // Assuming 'logo' is a URL to an image
    title: string;
    description: string;
    active: boolean;
    navSize: string;
}

const NavImageItem: React.FC<NavImageItemProps> = ({ image, title, description, active, navSize }) => {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    bgColor={active ? "#AEC8CA" : ""}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                    w={navSize == "large" ? "100%" : ""}
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
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
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
                    {/*<NavHoverBox title={title} icon={icon} description={description} />*/}
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default NavImageItem;