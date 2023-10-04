import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    Box,
} from '@chakra-ui/react'
import { IconType } from 'react-icons';

interface NavItemProps {
    icon: IconType; // Assuming 'logo' is a URL to an image
    title: string;
    active: boolean;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, active, onClick }) => {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={"flex-start"}
        >
            <Menu placement="right">
                <Link
                    bgColor={active ? "white" : ""}
                    p={3}
                    borderRadius={16}
                    _hover={{ textDecor: 'none', backgroundColor: "white" }}
                    w={"100%"}
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
                                bg={active ? "blue.500" : "white"}
                                borderRadius={"xl"}
                                width={8}
                                height={8}
                            >
                                <Icon
                                    as={icon}
                                    color={active ? "white" : "blue.500"}
                                    w={4} h={4}
                                />
                            </Box>
                            <Text
                                ml={5}
                                display={"flex"}
                                color={active ? "blue.900" : "blue.500"}
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