import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    Box
} from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface NavItemProps {
    icon: IconType; // Assuming 'logo' is a URL to an image
    title: string;
    description: string;
    active: boolean;
    navSize: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, description, active, navSize }) => {
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
                            <Box
                                display="flex"
                                alignItems="center"  // Center vertically
                                justifyContent="center" // Center horizontally
                                bg={"teal.200"}
                                borderRadius={"xl"}
                                width={8}
                                height={8}
                                color={active ? "#82AAAD" : "gray.500"}
                            >
                                <Icon
                                    as={icon}
                                    color="white"
                                    w={4} h={4}
                                />
                            </Box>
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
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default NavItem;