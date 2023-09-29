import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'

import PageHeader from '../components/Header/PageHeader'

export default function JediSwapPage() {
    return (
        <Box
            width={"100%"}
            height={"100%"}
        >
            <PageHeader page_name={"JediSwap"}></PageHeader>
        </Box>
    )
}