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
} from '@chakra-ui/react'


export default function EstimatedEarnings() {
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
            >
                TOP POOLS
            </Text>
            <Table
                rounded="md"
                width={"100%"}
                size={{ base: "sm", md: "md" }}

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
                    <Tr>
                        <Td>ETH/USD</Td>
                        <Td isNumeric>$12.4M</Td>
                        <Td isNumeric>20.4%</Td>
                    </Tr>
                    <Tr>
                        <Td>ETH/USD</Td>
                        <Td isNumeric>$12.4M</Td>
                        <Td isNumeric>20.4%</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    )
}