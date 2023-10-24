import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box
} from '@chakra-ui/react'

import AllPools from '../components/PoolLists/AllPools'
import Stats from '../components/Stats/Stats'
import TopPools from '../components/PoolLists/TopPools'
import GainChart from '../components/Charts/GainChart'
import Websites from '../components/Links/Websites'
import InvestedPools from '../components/PoolLists/InvestedPools'


export default function MyWalletPage() {
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
                <GainChart></GainChart>
                <TopPools></TopPools>
                <Stats></Stats>
            </Flex>
            <Flex
                flexDir={"row"}
            >
                <InvestedPools></InvestedPools>
                <Websites></Websites>
            </Flex>
        </Flex>
    )
}