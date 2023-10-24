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
            >
                <TvlChart></TvlChart>
                <TopPools></TopPools>
                <MyPools></MyPools>
            </Flex>
            <Flex
                flexDir={"row"}
            >
                <AllPools></AllPools>
                <Flex
                    flexDir={"column"}
                >
                    <EstimatedEarnings></EstimatedEarnings>
                    <Links></Links>
                </Flex>
            </Flex>
        </Flex>
    )
}