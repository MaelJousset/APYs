import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Divider,
    Image,
    Box,
    Center,
    Button,
    Link,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


export default function Links() {
    return (
        <Box
            bgColor={"blue.50"}
            borderRadius={"15px"}
            boxShadow='base'
            w="95%"
        >
            <Text
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                fontSize={"20px"}
                fontWeight={"bold"}
                color={"blue.900"}
                textAlign={"center"}
                paddingTop={3}
                paddingBottom={2}
            >
                LINKS
            </Text>
            <Divider
                borderColor={"blue.800"}
                borderBottomWidth={"2px"}
                marginBottom={3}
            />
            <Flex
                flexDir='column'
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                gap={2}
            >
                <LinkBox
                    bgColor={"blue.100"}
                    w="90%"
                    borderRadius={8}
                    paddingTop={3}
                    paddingBottom={3}
                    shadow='base'
                >
                    <Flex
                        w="100%"
                        flexDir={"row"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        gap={5}
                        paddingLeft={5}
                    >
                        <Image
                            src='x_logo.png'
                            h={5}
                            w={7}
                            fit="contain"
                        />
                        <LinkOverlay href='https://twitter.com/mySwapxyz' isExternal>
                            Twitter
                        </LinkOverlay>
                    </Flex>
                </LinkBox>

                <LinkBox
                    bgColor={"blue.100"}
                    w="90%"
                    borderRadius={8}
                    paddingTop={3}
                    paddingBottom={3}
                    shadow='base'
                >
                    <Flex
                        w="100%"
                        flexDir={"row"}
                        alignItems={"center"}
                        justifyContent={"flex-start"}
                        gap={5}
                        paddingLeft={5}
                    >
                        <Image
                            src='discord.png'
                            h={5}
                            w={7}
                            fit="contain"
                        />
                        <LinkOverlay href='https://discord.com/invite/gbxgWHzqE4' isExternal>
                            Discord
                        </LinkOverlay>
                    </Flex>
                </LinkBox>


            </Flex>
            <Center>
                <Button
                    fontFamily={"Plus Jakarta Sans, sans-serif"}
                    colorScheme='blue'
                    variant='solid'
                    size="sm"
                    borderRadius={5}
                    marginTop={4}
                    marginBottom={2}
                >
                    Show More
                </Button>
            </Center>

        </Box>
    )
}