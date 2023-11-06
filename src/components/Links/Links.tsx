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
                paddingBottom={4}
            >
                <LinkBox
                    bgColor={"whiteAlpha.700"}
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
                        paddingLeft={10}
                    >
                        <Image
                            src='assets/myswap.webp'
                            h={7}
                            w={7}
                            borderRadius={5}
                            fit="cover"
                        />
                        <LinkOverlay href='https://www.myswap.xyz/' isExternal color={"blue.500"}>
                            Website
                        </LinkOverlay>
                    </Flex>
                </LinkBox>
                <LinkBox
                    bgColor={"whiteAlpha.700"}
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
                        paddingLeft={10}
                    >
                        <Image
                            src='assets/x_logo.png'
                            h={5}
                            w={7}
                            fit="contain"
                        />
                        <LinkOverlay href='https://twitter.com/mySwapxyz' isExternal color={"blue.500"}>
                            Twitter
                        </LinkOverlay>
                    </Flex>
                </LinkBox>

                <LinkBox
                    bgColor={"whiteAlpha.700"}
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
                        paddingLeft={10}
                    >
                        <Image
                            src='assets/discord.png'
                            h={5}
                            w={7}
                            fit="contain"
                        />
                        <LinkOverlay href='https://discord.com/invite/gbxgWHzqE4' isExternal color={"blue.500"}>
                            Discord
                        </LinkOverlay>
                    </Flex>
                </LinkBox>
                <LinkBox
                    bgColor={"whiteAlpha.700"}
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
                        paddingLeft={10}
                    >
                        <Image
                            src='assets/Telegram.png'
                            h={7}
                            w={7}
                            fit="cover"
                        />
                        <LinkOverlay href='https://t.me/mySwapxyz' isExternal color={"blue.500"}>
                            Telegram
                        </LinkOverlay>
                    </Flex>
                </LinkBox>

            </Flex>

        </Box>
    )
}