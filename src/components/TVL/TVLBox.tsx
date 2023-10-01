import {
    Box,
    Flex,
    Image,
    Text,
} from "@chakra-ui/react"

import TVLChart from "./TVLChart";
import TVLValue from "./TVLValue";


interface TVLBoxProps {
    pool: string;
    values: {
        x: Date;
        y: number;
    }[];
}
const TVLBox: React.FC<TVLBoxProps> = ({ pool, values }) => {
    return (
        <Box
            borderRadius={15}
            paddingLeft={5}
            paddingRight={5}
            paddingBottom={5}
            paddingTop={3}
            w={"370px"}
            bgColor={"gray.200"}
        >
            <Flex
                flexDir={"column"}
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
                <TVLChart
                    chartData={values} pool={pool}
                />
            </Flex>

        </Box>
    )
}

export default TVLBox;