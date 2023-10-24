import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
    Center,
} from '@chakra-ui/react'


export default function MyPools() {
    return (
        <Box
            bgColor={"blue.50"}
            borderRadius={"15px"}
            boxShadow='base'
            w="20%"
        >
            <Text
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                fontSize={"20px"}
                fontWeight={"bold"}
                color={"blue.900"}
                textAlign={"center"}
                paddingTop={2}
                paddingBottom={2}
            >
                MY POOLS
            </Text>
            <Table
                rounded="md"
                width={"100%"}
                size={"sm"}

                variant='striped'
                colorScheme='blue'
            >
                <Thead>
                    <Tr>
                        <Th>Pool</Th>
                        <Th isNumeric>TVL</Th>
                        <Th isNumeric>APR</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderStyle={"hidden"}>
                        <Td fontSize={"13px"} >ETH/USD</Td>
                        <Td fontSize={"13px"} isNumeric>$12.4M</Td>
                        <Td fontSize={"13px"} isNumeric>20.4%</Td>
                    </Tr>
                    <Tr borderStyle={"hidden"}>
                        <Td fontSize={"13px"} >ETH/USD</Td>
                        <Td fontSize={"13px"} isNumeric>$12.4M</Td>
                        <Td fontSize={"13px"} isNumeric>20.4%</Td>
                    </Tr>
                </Tbody>
            </Table>
            <Center>
                <Button
                    fontFamily={"Plus Jakarta Sans, sans-serif"}
                    colorScheme="twitter"
                    size="sm"
                    borderRadius={5}
                    marginTop={3}
                    marginBottom={2}
                >
                    Show More
                </Button>
            </Center>
        </Box>
    )
}