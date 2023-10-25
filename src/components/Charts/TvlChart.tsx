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
    pool: string;
    values: {
        x: Date;
        y: number;
    }[];
}
const TvlChart: React.FC<TvlChartProps> = ({ pool, values }) => {
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
                        fontSize={"18px"}
                        color={"blue.700"}
                    >
                        {pool}
                    </Text>
                    <TVLValue values={values} />
                </Flex>
                <Chart chartData={values} />
            </Flex>
        </Box>
    )
}

export default TvlChart;