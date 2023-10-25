import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box
} from '@chakra-ui/react'

import Links from '../components/Links/Links'
import EstimatedEarnings from '../components/Stats/EstimatedEarnings'
import AllPools from '../components/PoolLists/AllPools'
import MyPools from '../components/PoolLists/MyPools'
import TopPools from '../components/PoolLists/TopPools'
import TvlChart from '../components/Charts/TvlChart'


export default function EkuboPage() {
    return (
        <Flex
            pt={{ base: 6, md: 0 }}
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            gap={10}
            paddingLeft={{ base: 3, md: 12 }}
            paddingRight={{ base: 3, md: 12 }}
            paddingTop={{ base: 2, md: 8 }}
        >
            <Flex
                flexDir={"row"}
                w="100%"
                justifyContent={"space-between"}
                gap={10}
                alignItems={"flex-start"}
            >
                <TvlChart
                    values={[
                        { x: new Date('2023-09-01'), y: 100 },
                        { x: new Date('2023-09-02'), y: 150 },
                        { x: new Date('2023-09-03'), y: 100 },
                    ]}
                />
                <TopPools />
                <MyPools />
            </Flex>
            <Flex
                flexDir={"row"}
                w="100%"
            >
                <AllPools></AllPools>
                <Flex
                    flexDir={"column"}
                    w="20%"
                >
                    <EstimatedEarnings></EstimatedEarnings>
                    <Links></Links>
                </Flex>
            </Flex>
        </Flex>
    )
}