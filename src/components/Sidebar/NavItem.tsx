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
    Center
} from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface NavItemProps {
    icon: IconType; // Assuming 'logo' is a URL to an image
    title: string;
    active: boolean;
    navSize: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, active, navSize, onClick }) => {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    bgColor={active ? "white" : ""}
                    p={3}
                    borderRadius={16}
                    _hover={{ textDecor: 'none', backgroundColor: "white" }}
                    w={navSize === "large" ? "100%" : ""}
                    onClick={onClick}
                >
                    <MenuButton w="100%">
                        <Flex
                            alignItems={"center"}
                        >
                            <Box
                                display="flex"
                                alignItems="center"  // Center vertically
                                justifyContent="center" // Center horizontally
                                bg={active ? "teal.200" : "white"}
                                borderRadius={"xl"}
                                width={8}
                                height={8}
                            >
                                <Icon
                                    as={icon}
                                    color={active ? "white" : "teal.200"}
                                    w={4} h={4}
                                />
                            </Box>
                            <Text
                                ml={5}
                                display={navSize === "small" ? "none" : "flex"}
                                color={active ? "blue.900" : "gray.400"}
                                fontWeight={active ? "bold" : "medium"}
                            >
                                {title}
                            </Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}

export default NavItem;