import React, { useState } from 'react'
import {
    Flex,
    Text,
    Heading,
    Box,
} from '@chakra-ui/react'

import PageHeader from '../components/Header/PageHeader'

export default function MyWalletPage() {
    return (
        <Box
            width={"100%"}
            height={"100%"}
        >
            <PageHeader page_name={"My Wallet"}></PageHeader>
        </Box>
    )
}