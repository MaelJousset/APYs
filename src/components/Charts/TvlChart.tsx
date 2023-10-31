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
import CustomChart from './Chart';
import TVLValue from '../TVL/TVLValue';

interface TvlChartProps {
    values: {
        x: Date;
        y: number;
    }[];
}
const TvlChart: React.FC<TvlChartProps> = ({ values }) => {

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
        "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const convertedData: { x: string; y: number }[] = values.map((item) => ({
        x: `${months[item.x.getMonth()]} ${item.x.getDate()}`,
        y: item.y,
    }));


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
                // padding={5}
                alignItems={"center"}
            >
                <Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    width={"100%"}
                    paddingTop={5}
                    paddingLeft={5}
                    paddingRight={5}
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
                <CustomChart chartData={convertedData} />
            </Flex>
        </Box>
    )
}

export default TvlChart;