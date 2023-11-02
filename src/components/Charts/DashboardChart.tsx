import React, { useState } from 'react'
import {
    Flex,
    Text,
    Box,
} from '@chakra-ui/react'

import CustomChart from './Chart';
import TVLValue from '../TVL/TVLValue';

interface DashboardChartProps {
    pool: string;
    values: {
        x: Date;
        y: number;
    }[];
}
const DashboardChart: React.FC<DashboardChartProps> = ({ pool, values }) => {

    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June",
        "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

    const convertedData: { x: string; y: number }[] = values.map((item) => ({
        x: `${months[item.x.getMonth()]} ${item.x.getDate()}`,
        y: item.y,
    }));


    return (
        <Box
        // borderRadius={15}
        // paddingLeft={5}
        // paddingRight={5}
        // paddingBottom={5}
        // paddingTop={3}
        // w={"30%"}
        // bgColor={"blue.100"}
        // shadow={"base"}
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
                        {pool}
                    </Text>
                    <TVLValue values={values} />
                </Flex>
                <CustomChart isSimple={true} width={350} height={200} chartData={convertedData} />
            </Flex>
        </Box>
    )
}

export default DashboardChart;