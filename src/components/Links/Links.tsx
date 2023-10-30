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
                marginBottom={1}
            />
            <Flex
                flexDir='column'
                width={"100%"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                gap={2}
            >
                <LinkBox
                    bgColor={"gray.50"}
                    w="90%"
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                >
                    <Flex
                        w="100%"
                        flexDir={"row"}
                    >
                        <Image
                            src='x_logo.png'
                            h={6}
                        />
                        <LinkOverlay href='https://twitter.com/mySwapxyz' isExternal>
                            Twitter
                        </LinkOverlay>
                    </Flex>
                </LinkBox>

                <LinkBox
                    bgColor={"gray.50"}
                    w="90%"
                >
                    <Flex
                        w="100%"
                        flexDir={"row"}
                    >
                        <Image
                            src='x_logo.png'
                            h={6}
                        />
                        <LinkOverlay href='https://twitter.com/mySwapxyz' isExternal>
                            Twitter
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