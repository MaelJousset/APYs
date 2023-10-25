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

//import TVLChart from '../TVL/TVLChart';
import Chart from './Chart';
import TVLValue from '../TVL/TVLValue';

interface TvlChartProps {
    values: {
        x: Date;
        y: number;
    }[];
}
const TvlChart: React.FC<TvlChartProps> = ({ values }) => {
    return (
        <Box
            bgColor={"blue.50"}
            borderRadius={"15px"}
            boxShadow='base'
            w="60%"
        >
            <Flex
                flexDir={"column"}
                gap={1}
                padding={5}
            >
                <Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    width={"100%"}
                >
                    <Text
                        fontFamily={"Plus Jakarta Sans, sans-serif"}
                        fontSize={"24px"}
                        color={"blue.800"}
                    >
                        TVL
                    </Text>
                    <TVLValue values={values} />
                </Flex>
                <Chart chartData={values} />
            </Flex>
        </Box>
    )
}

export default TvlChart;