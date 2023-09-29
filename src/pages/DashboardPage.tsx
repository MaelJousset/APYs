import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'

import PageHeader from '../components/Header/PageHeader'



export default function DashboardPage() {
    return (
        <Flex
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <PageHeader page_name={"Dashboard"} />
        </Flex>
    )
}