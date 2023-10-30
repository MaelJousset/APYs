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
    Divider,
} from '@chakra-ui/react'


export default function AllPools() {
    return (
        <Box
            bgColor={"blue.50"}
            borderRadius={"15px"}
            boxShadow='base'
            w="80%"
        >
            <Text
                fontFamily={"Plus Jakarta Sans, sans-serif"}
                fontSize={"20px"}
                fontWeight={"bold"}
                color={"blue.900"}
                textAlign={"center"}
                paddingTop={4}
                paddingBottom={3}
            >
                ALL THE POOLS
            </Text>
            <Divider
                borderColor={"blue.800"}
                borderBottomWidth={"2px"}
                marginBottom={4}
            />
            <Table
                rounded="md"
                width={"100%"}
                size={"md"}
                variant='striped'
                colorScheme='blue'
                fontFamily={"Plus Jakarta Sans, sans-serif"}
            >
                <Thead>
                    <Tr>
                        <Th fontSize={"14px"}>Pool</Th>
                        <Th fontSize={"14px"} isNumeric>TVL</Th>
                        <Th fontSize={"14px"} isNumeric>Vol (24h)</Th>
                        <Th fontSize={"14px"} isNumeric>Vol (7d)</Th>
                        <Th fontSize={"14px"} isNumeric>Fees (%)</Th>
                        <Th fontSize={"14px"} isNumeric>Fees (24h)</Th>
                        <Th fontSize={"14px"} isNumeric>APR/APY</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr borderStyle={"hidden"}>
                        <Td >ETH/USD</Td>
                        <Td isNumeric>$1.4M</Td>
                        <Td isNumeric>$4.9M</Td>
                        <Td isNumeric>0.05%</Td>
                        <Td isNumeric>$1.5K</Td>
                        <Td isNumeric>$12.4M</Td>
                        <Td isNumeric>20.4%</Td>
                    </Tr>
                    <Tr borderStyle={"hidden"}>
                        <Td >ETH/USD</Td>
                        <Td isNumeric>$1.4M</Td>
                        <Td isNumeric>$4.9M</Td>
                        <Td isNumeric>0.05%</Td>
                        <Td isNumeric>$1.5K</Td>
                        <Td isNumeric>$12.4M</Td>
                        <Td isNumeric>20.4%</Td>
                    </Tr>
                </Tbody>
            </Table>
            <Center>
                <Button
                    fontFamily={"Plus Jakarta Sans, sans-serif"}
                    colorScheme='blue'
                    variant='solid'
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