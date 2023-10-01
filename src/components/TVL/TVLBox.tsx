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
        <Box>
            <Flex
                flexDir={"row"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
            >
                <Text>{pool}</Text>
                <TVLValue values={values} />
            </Flex>
            <TVLChart
                chartData={values} pool={pool}
            />

        </Box>
    )
}

export default TVLBox;