import React from 'react'
import {
    Flex,
    Text,
    Link,
    Menu,
    MenuButton,
    Image,
    Box,
} from '@chakra-ui/react'


interface NavImageItemProps {
    image: string; // Assuming 'image' is a URL to an image
    title: string;
    active: boolean;
    onClick?: () => void;
}

const NavImageItem: React.FC<NavImageItemProps> = ({ image, title, active, onClick }) => {
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
                    display="flex" // Add this property to make Link a flex container
                    alignItems="center" // Align items vertically within the Link
                >
                    <MenuButton w="100%">
                        <Flex
                            alignItems={"center"}
                        >
                            <Box
                                display="flex"
                                alignItems="center"  // Center vertically
                                justifyContent="center" // Center horizontally
                                borderRadius={"xl"}
                                width={8}
                                height={8}
                            >
                                <Image
                                    src={image}
                                    borderRadius={"lg"}
                                    width={8}
                                    height={8}
                                    objectFit="cover"
                                />
                            </Box>
                            <Text
                                ml={5}
                                display={"flex"}
                                color={active ? "blue.900" : "blue.500"}
                                fontWeight={active ? "bold" : "medium"}
                                lineHeight={"12px"}
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

export default NavImageItem;