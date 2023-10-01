import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'

import PageHeader from '../components/Header/PageHeader'
import TopList from '../components/TopList/TopList'
import TVLList from '../components/TVL/TVLList'



export default function DashboardPage() {
    return (
        <Flex
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            gap={10}
        >
            <PageHeader page_name={"Dashboard"} />
            <TopList />
            <TVLList />
        </Flex>
    )
}